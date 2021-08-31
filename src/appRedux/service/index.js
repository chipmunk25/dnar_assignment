import CoinGeckoClient from 'coingecko-api';
const client = new CoinGeckoClient({
    timeout: 10000,
    autoRetry: true,
});

export const GetGeckoCapMarket = async () => {
    const params = {
        order: CoinGeckoClient.ORDER.MARKET_CAP_DESC,
        sparkline: true,
        vs_currency: 'usd'
    }
    const result = await client.coins.markets({ params })
    return result
}

export const GetCryptoEvents = async () => {

    const result = await client.events.all()
    return result
}

export const GetCoinMarketChart = async (coinId) => {
    const params = {
        vs_currency: 'usd',
        days: 30
    }
    const result = await client.coins.fetchMarketChart(coinId, { params });
    return result
}
export const GetSingleCoin = async (coinId) => {
    const params = {
        vs_currency: 'usd',
        days: 30
    }
    const result = await client.coins.fetch(coinId, {});
    return result
}

