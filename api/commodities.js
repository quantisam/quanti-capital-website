/**
 * Commodity Price API - Vercel Serverless Function
 * Proxies requests to Alpha Vantage to protect API key
 */

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { commodity, interval = 'monthly' } = req.query;

  if (!commodity) {
    return res.status(400).json({ error: 'Commodity parameter is required' });
  }

  // Validate commodity
  const validCommodities = [
    'COPPER', 'ALUMINUM', 'WTI', 'BRENT', 'NATURAL_GAS',
    'WHEAT', 'CORN', 'COTTON', 'SUGAR', 'COFFEE', 'ALL_COMMODITIES'
  ];

  if (!validCommodities.includes(commodity.toUpperCase())) {
    return res.status(400).json({ 
      error: `Invalid commodity. Valid options: ${validCommodities.join(', ')}` 
    });
  }

  // Validate interval
  const validIntervals = ['daily', 'weekly', 'monthly'];
  if (!validIntervals.includes(interval.toLowerCase())) {
    return res.status(400).json({ 
      error: `Invalid interval. Valid options: ${validIntervals.join(', ')}` 
    });
  }

  // Get API key from environment
  const apiKey = process.env.ALPHA_VANTAGE_API_KEY;

  if (!apiKey) {
    console.error('ALPHA_VANTAGE_API_KEY not configured');
    // Return demo data if API key not set
    return res.status(200).json({
      name: commodity,
      unit: 'USD',
      data: [
        { date: new Date().toISOString().split('T')[0], value: getDefaultPrice(commodity) },
        { date: getPreviousDate(), value: getDefaultPrice(commodity) * 0.99 }
      ],
      demo: true,
      message: 'Using demo data. Set ALPHA_VANTAGE_API_KEY for live prices.'
    });
  }

  try {
    const url = `https://www.alphavantage.co/query?function=${commodity.toUpperCase()}&interval=${interval}&apikey=${apiKey}`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Alpha Vantage API error: ${response.status}`);
    }

    const data = await response.json();

    // Check for API limit error
    if (data.Note || data.Information) {
      console.warn('Alpha Vantage rate limit:', data.Note || data.Information);
      return res.status(429).json({ 
        error: 'API rate limit reached. Please try again later.',
        data: [
          { date: new Date().toISOString().split('T')[0], value: getDefaultPrice(commodity) },
          { date: getPreviousDate(), value: getDefaultPrice(commodity) * 0.99 }
        ]
      });
    }

    // Transform Alpha Vantage response
    const transformed = {
      name: data.name || commodity,
      unit: data.unit || 'USD',
      data: data.data ? data.data.slice(0, 10) : [], // Return last 10 data points
      lastUpdated: new Date().toISOString(),
    };

    // Cache the response (Vercel Edge caching)
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');
    
    return res.status(200).json(transformed);
  } catch (error) {
    console.error('Commodity API error:', error);
    
    return res.status(500).json({ 
      error: 'Failed to fetch commodity data',
      message: error.message 
    });
  }
}

/**
 * Get default price for demo mode
 */
function getDefaultPrice(commodity) {
  const defaults = {
    COPPER: 4.25,
    ALUMINUM: 2450,
    WTI: 72.50,
    BRENT: 77.80,
    NATURAL_GAS: 2.85,
    WHEAT: 5.75,
    CORN: 4.50,
    COTTON: 0.78,
    SUGAR: 0.22,
    COFFEE: 2.45,
  };
  return defaults[commodity.toUpperCase()] || 100;
}

/**
 * Get previous month date for demo data
 */
function getPreviousDate() {
  const date = new Date();
  date.setMonth(date.getMonth() - 1);
  return date.toISOString().split('T')[0];
}
