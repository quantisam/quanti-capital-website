import { useState, useEffect, useCallback } from 'react';
import { 
  getAllCommodities, 
  getCommodity, 
  fetchCommodityPrice,
  SUPPORTED_COMMODITIES,
  SIMULATED_COMMODITIES,
  clearCache 
} from '../services/commodityApi';

/**
 * Hook for fetching all commodity prices
 * Returns live data for supported commodities, simulated for others
 */
export function useCommodityPrices() {
  const [prices, setPrices] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  const fetchPrices = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getAllCommodities();
      setPrices(data);
      setLastUpdated(new Date());
    } catch (err) {
      setError(err.message);
      console.error('Failed to fetch commodity prices:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPrices();
    
    // Refresh every hour (matches cache TTL)
    const interval = setInterval(fetchPrices, 60 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, [fetchPrices]);

  const refresh = useCallback(() => {
    clearCache();
    fetchPrices();
  }, [fetchPrices]);

  return { prices, loading, error, lastUpdated, refresh };
}

/**
 * Hook for fetching a single commodity price
 * @param {string} symbol - Commodity symbol (e.g., 'COPPER', 'LITHIUM')
 */
export function useCommodityPrice(symbol) {
  const [price, setPrice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPrice() {
      if (!symbol) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const data = await getCommodity(symbol);
        setPrice(data);
      } catch (err) {
        setError(err.message);
        console.error(`Failed to fetch ${symbol} price:`, err);
      } finally {
        setLoading(false);
      }
    }

    fetchPrice();
  }, [symbol]);

  return { price, loading, error };
}

/**
 * Hook for fetching specific live commodities
 * @param {string[]} symbols - Array of commodity symbols
 */
export function useLiveCommodities(symbols = ['COPPER', 'ALUMINUM']) {
  const [prices, setPrices] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPrices() {
      try {
        setLoading(true);
        setError(null);
        
        const results = await Promise.all(
          symbols.map(symbol => 
            SUPPORTED_COMMODITIES[symbol] 
              ? fetchCommodityPrice(symbol) 
              : Promise.resolve(SIMULATED_COMMODITIES[symbol] || null)
          )
        );
        
        const priceMap = {};
        results.forEach(result => {
          if (result) {
            priceMap[result.symbol] = result;
          }
        });
        
        setPrices(priceMap);
      } catch (err) {
        setError(err.message);
        console.error('Failed to fetch commodity prices:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchPrices();
  }, [symbols.join(',')]);

  return { prices, loading, error };
}

/**
 * Get display commodities for the ticker
 * Returns a curated list of commodities for the ticker display
 */
export function useTickerCommodities() {
  const [commodities, setCommodities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTickerData() {
      try {
        setLoading(true);
        
        // Fetch live data for copper and aluminum
        const [copper, aluminum] = await Promise.all([
          fetchCommodityPrice('COPPER'),
          fetchCommodityPrice('ALUMINUM'),
        ]);

        // Build ticker items with live + simulated data
        const tickerItems = [
          {
            symbol: 'Cu',
            name: 'Copper',
            price: copper.price || 9500,
            change: copper.change || 0,
            unit: 'USD/mt',
            isSimulated: copper.error ? true : false,
          },
          {
            symbol: 'Al',
            name: 'Aluminum',
            price: aluminum.price || 2500,
            change: aluminum.change || 0,
            unit: 'USD/mt',
            isSimulated: aluminum.error ? true : false,
          },
          {
            symbol: 'Li',
            name: 'Lithium',
            price: SIMULATED_COMMODITIES.LITHIUM.price,
            change: SIMULATED_COMMODITIES.LITHIUM.change,
            unit: 'USD/mt',
            isSimulated: true,
          },
          {
            symbol: 'Co',
            name: 'Cobalt',
            price: SIMULATED_COMMODITIES.COBALT.price,
            change: SIMULATED_COMMODITIES.COBALT.change,
            unit: 'USD/mt',
            isSimulated: true,
          },
          {
            symbol: 'Ni',
            name: 'Nickel',
            price: SIMULATED_COMMODITIES.NICKEL.price,
            change: SIMULATED_COMMODITIES.NICKEL.change,
            unit: 'USD/mt',
            isSimulated: true,
          },
          {
            symbol: 'REE',
            name: 'Rare Earths',
            price: SIMULATED_COMMODITIES.RARE_EARTHS.price,
            change: SIMULATED_COMMODITIES.RARE_EARTHS.change,
            unit: 'Index',
            isSimulated: true,
          },
          {
            symbol: 'W',
            name: 'Tungsten',
            price: SIMULATED_COMMODITIES.TUNGSTEN.price,
            change: SIMULATED_COMMODITIES.TUNGSTEN.change,
            unit: 'USD/mtu',
            isSimulated: true,
          },
          {
            symbol: 'Ga',
            name: 'Gallium',
            price: SIMULATED_COMMODITIES.GALLIUM.price,
            change: SIMULATED_COMMODITIES.GALLIUM.change,
            unit: 'USD/kg',
            isSimulated: true,
          },
        ];

        setCommodities(tickerItems);
      } catch (err) {
        console.error('Failed to fetch ticker data:', err);
        // Fallback to all simulated data
        setCommodities([
          { symbol: 'Cu', name: 'Copper', price: 9500, change: 1.2, unit: 'USD/mt', isSimulated: true },
          { symbol: 'Al', name: 'Aluminum', price: 2500, change: 0.5, unit: 'USD/mt', isSimulated: true },
          { symbol: 'Li', name: 'Lithium', price: 10500, change: -2.3, unit: 'USD/mt', isSimulated: true },
          { symbol: 'Co', name: 'Cobalt', price: 24200, change: 1.2, unit: 'USD/mt', isSimulated: true },
          { symbol: 'Ni', name: 'Nickel', price: 15800, change: 0.8, unit: 'USD/mt', isSimulated: true },
          { symbol: 'REE', name: 'Rare Earths', price: 285, change: -0.5, unit: 'Index', isSimulated: true },
          { symbol: 'W', name: 'Tungsten', price: 335, change: 1.5, unit: 'USD/mtu', isSimulated: true },
          { symbol: 'Ga', name: 'Gallium', price: 315, change: 3.2, unit: 'USD/kg', isSimulated: true },
        ]);
      } finally {
        setLoading(false);
      }
    }

    fetchTickerData();
  }, []);

  return { commodities, loading };
}
