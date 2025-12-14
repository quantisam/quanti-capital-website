/**
 * Commodity Price API Service
 * Uses Alpha Vantage free tier for real commodity data
 * Free tier: 25 requests/day - use caching strategically
 */

// Alpha Vantage supported commodities
export const SUPPORTED_COMMODITIES = {
  COPPER: { symbol: 'COPPER', name: 'Copper', unit: 'USD/mt', displaySymbol: 'Cu' },
  ALUMINUM: { symbol: 'ALUMINUM', name: 'Aluminum', unit: 'USD/mt', displaySymbol: 'Al' },
  WTI: { symbol: 'WTI', name: 'WTI Crude Oil', unit: 'USD/bbl', displaySymbol: 'WTI' },
  BRENT: { symbol: 'BRENT', name: 'Brent Crude', unit: 'USD/bbl', displaySymbol: 'BRENT' },
  NATURAL_GAS: { symbol: 'NATURAL_GAS', name: 'Natural Gas', unit: 'USD/MMBtu', displaySymbol: 'NG' },
  WHEAT: { symbol: 'WHEAT', name: 'Wheat', unit: 'USD/bu', displaySymbol: 'W' },
  CORN: { symbol: 'CORN', name: 'Corn', unit: 'USD/bu', displaySymbol: 'C' },
  COTTON: { symbol: 'COTTON', name: 'Cotton', unit: 'USD/lb', displaySymbol: 'CT' },
  SUGAR: { symbol: 'SUGAR', name: 'Sugar', unit: 'USD/lb', displaySymbol: 'SB' },
  COFFEE: { symbol: 'COFFEE', name: 'Coffee', unit: 'USD/lb', displaySymbol: 'KC' },
};

// Simulated data for commodities not available via free APIs
// These are marked as indicative and based on approximate market values
export const SIMULATED_COMMODITIES = {
  LITHIUM: { 
    symbol: 'LITHIUM', 
    name: 'Lithium Carbonate', 
    unit: 'USD/mt',
    displaySymbol: 'Li',
    price: 10500,
    change: -2.3,
    isSimulated: true 
  },
  COBALT: { 
    symbol: 'COBALT', 
    name: 'Cobalt', 
    unit: 'USD/mt',
    displaySymbol: 'Co',
    price: 24200,
    change: 1.2,
    isSimulated: true 
  },
  NICKEL: { 
    symbol: 'NICKEL', 
    name: 'Nickel', 
    unit: 'USD/mt',
    displaySymbol: 'Ni',
    price: 15800,
    change: 0.8,
    isSimulated: true 
  },
  RARE_EARTHS: { 
    symbol: 'RARE_EARTHS', 
    name: 'Rare Earths Index', 
    unit: 'Index',
    displaySymbol: 'REE',
    price: 285,
    change: -0.5,
    isSimulated: true 
  },
  GRAPHITE: { 
    symbol: 'GRAPHITE', 
    name: 'Graphite', 
    unit: 'USD/mt',
    displaySymbol: 'C',
    price: 1150,
    change: 0.3,
    isSimulated: true 
  },
  MANGANESE: { 
    symbol: 'MANGANESE', 
    name: 'Manganese', 
    unit: 'USD/mt',
    displaySymbol: 'Mn',
    price: 4650,
    change: -0.7,
    isSimulated: true 
  },
  TUNGSTEN: {
    symbol: 'TUNGSTEN',
    name: 'Tungsten',
    unit: 'USD/mtu',
    displaySymbol: 'W',
    price: 335,
    change: 1.5,
    isSimulated: true
  },
  TITANIUM: {
    symbol: 'TITANIUM',
    name: 'Titanium',
    unit: 'USD/mt',
    displaySymbol: 'Ti',
    price: 12500,
    change: 0.4,
    isSimulated: true
  },
  GALLIUM: {
    symbol: 'GALLIUM',
    name: 'Gallium',
    unit: 'USD/kg',
    displaySymbol: 'Ga',
    price: 315,
    change: 3.2,
    isSimulated: true
  },
  GERMANIUM: {
    symbol: 'GERMANIUM',
    name: 'Germanium',
    unit: 'USD/kg',
    displaySymbol: 'Ge',
    price: 1950,
    change: 2.1,
    isSimulated: true
  },
  ANTIMONY: {
    symbol: 'ANTIMONY',
    name: 'Antimony',
    unit: 'USD/mt',
    displaySymbol: 'Sb',
    price: 25000,
    change: 4.8,
    isSimulated: true
  },
  TANTALUM: {
    symbol: 'TANTALUM',
    name: 'Tantalum',
    unit: 'USD/kg',
    displaySymbol: 'Ta',
    price: 158,
    change: -0.3,
    isSimulated: true
  },
};

// Cache for API responses (1 hour TTL)
const cache = new Map();
const CACHE_TTL = 60 * 60 * 1000; // 1 hour in milliseconds

/**
 * Get cached data if still valid
 */
function getCached(key) {
  const cached = cache.get(key);
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    return cached.data;
  }
  return null;
}

/**
 * Set cache with timestamp
 */
function setCache(key, data) {
  cache.set(key, { data, timestamp: Date.now() });
}

// API Key - in production this comes from serverless function, in dev we use env var
const API_KEY = import.meta.env.VITE_ALPHA_VANTAGE_API_KEY;
const IS_DEV = import.meta.env.DEV;

/**
 * Fetch commodity price from Alpha Vantage
 * In dev: calls Alpha Vantage directly
 * In prod: uses serverless endpoint to protect API key
 * @param {string} commodity - One of SUPPORTED_COMMODITIES keys
 * @param {string} interval - 'daily', 'weekly', or 'monthly'
 */
export async function fetchCommodityPrice(commodity, interval = 'monthly') {
  const cacheKey = `${commodity}_${interval}`;
  const cached = getCached(cacheKey);
  if (cached) {
    return cached;
  }

  try {
    let data;
    
    if (IS_DEV && API_KEY) {
      // In development, call Alpha Vantage directly
      const url = `https://www.alphavantage.co/query?function=${commodity}&interval=${interval}&apikey=${API_KEY}`;
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
      
      const rawData = await response.json();
      
      // Check for API limit
      if (rawData.Note || rawData.Information) {
        console.warn('Alpha Vantage rate limit:', rawData.Note || rawData.Information);
        throw new Error('API rate limit reached');
      }
      
      // Parse Alpha Vantage response format
      const dataKey = Object.keys(rawData).find(k => k.includes('data'));
      const priceData = rawData[dataKey] || [];
      
      data = {
        name: rawData.name || SUPPORTED_COMMODITIES[commodity]?.name || commodity,
        unit: rawData.unit || SUPPORTED_COMMODITIES[commodity]?.unit || 'USD',
        data: priceData.slice(0, 2).map(d => ({
          date: d.date,
          value: d.value
        }))
      };
    } else {
      // In production, use our serverless endpoint
      const response = await fetch(`/api/commodities?commodity=${commodity}&interval=${interval}`);
      
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      data = await response.json();
      
      if (data.error) {
        throw new Error(data.error);
      }
    }

    // Parse response
    const result = {
      symbol: commodity,
      name: data.name || SUPPORTED_COMMODITIES[commodity]?.name || commodity,
      unit: data.unit || SUPPORTED_COMMODITIES[commodity]?.unit || 'USD',
      price: parseFloat(data.data?.[0]?.value || 0),
      previousPrice: parseFloat(data.data?.[1]?.value || 0),
      lastUpdated: data.data?.[0]?.date || new Date().toISOString(),
      isSimulated: false,
    };

    // Calculate change percentage
    if (result.previousPrice > 0) {
      result.change = ((result.price - result.previousPrice) / result.previousPrice) * 100;
    } else {
      result.change = 0;
    }

    setCache(cacheKey, result);
    return result;
  } catch (error) {
    console.error(`Failed to fetch ${commodity}:`, error);
    
    // Return fallback data on error
    return {
      symbol: commodity,
      name: SUPPORTED_COMMODITIES[commodity]?.name || commodity,
      unit: SUPPORTED_COMMODITIES[commodity]?.unit || 'USD',
      price: 0,
      change: 0,
      error: true,
      errorMessage: error.message,
      isSimulated: false,
    };
  }
}

/**
 * Fetch multiple commodities in parallel
 * @param {string[]} commodities - Array of commodity symbols
 */
export async function fetchMultipleCommodities(commodities) {
  const results = await Promise.all(
    commodities.map(commodity => fetchCommodityPrice(commodity))
  );
  
  return results.reduce((acc, result) => {
    acc[result.symbol] = result;
    return acc;
  }, {});
}

/**
 * Get all commodities (live + simulated)
 * Combines real API data with simulated data for unsupported commodities
 */
export async function getAllCommodities() {
  // Fetch live data for supported commodities (prioritize critical materials)
  const liveCommodities = ['COPPER', 'ALUMINUM'];
  const liveData = await fetchMultipleCommodities(liveCommodities);
  
  // Combine with simulated data
  return {
    ...liveData,
    ...SIMULATED_COMMODITIES,
  };
}

/**
 * Get commodity data by symbol
 * Returns live data if available, otherwise simulated
 */
export async function getCommodity(symbol) {
  if (SIMULATED_COMMODITIES[symbol]) {
    return SIMULATED_COMMODITIES[symbol];
  }
  
  if (SUPPORTED_COMMODITIES[symbol]) {
    return fetchCommodityPrice(symbol);
  }
  
  return null;
}

/**
 * Clear the cache (useful for forcing refresh)
 */
export function clearCache() {
  cache.clear();
}

/**
 * Get cache status
 */
export function getCacheStatus() {
  const entries = [];
  for (const [key, value] of cache.entries()) {
    const age = Date.now() - value.timestamp;
    entries.push({
      key,
      age: Math.round(age / 1000),
      valid: age < CACHE_TTL,
    });
  }
  return entries;
}
