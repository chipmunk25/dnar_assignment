
import { createAction } from 'redux-actions';


export const TOGGLE_ROUTE = "TOGGLE_ROUTE"

export const REQUEST_GET_ALLCOINS = "REQUEST_GET_ALLCOINS"
export const SUCCESS_GET_ALLCOINS = "SUCCESS_GET_ALLCOINS"

export const REQUEST_GET_MARKETS = "REQUEST_GET_MARKETS"
export const SUCCESS_GET_MARKETS = "SUCCESS_GET_MARKETS"

export const REQUEST_GET_MARKET_CHART = "REQUEST_GET_MARKET_CHART"
export const SUCCESS_GET_MARKET_CHART = "SUCCESS_GET_MARKET_CHART"

export const REQUEST_GET_EVENTS = "REQUEST_GET_EVENTS"
export const SUCCESS_GET_EVENTS = "SUCCESS_GET_EVENTS"

export const REQUEST_GET_SINGLE_COIN = "REQUEST_GET_SINGLE_COIN"
export const SUCCESS_GET_SINGLE_COIN = "SUCCESS_GET_SINGLE_COIN"


export const toggleRoute = createAction(TOGGLE_ROUTE);

export const requestGetAllCoins = createAction(REQUEST_GET_ALLCOINS);
export const requestGetMarket = createAction(REQUEST_GET_MARKETS);
export const requestGetMarketChart = createAction(REQUEST_GET_MARKET_CHART);
export const requestGetEvents = createAction(REQUEST_GET_EVENTS);
export const requestGetSingleCoin = createAction(REQUEST_GET_SINGLE_COIN);

export const successGetAllCoins = createAction(SUCCESS_GET_ALLCOINS);
export const successGetMarket = createAction(SUCCESS_GET_MARKETS);
export const successGetMarketChart = createAction(SUCCESS_GET_MARKET_CHART);
export const successGetEvents = createAction(SUCCESS_GET_EVENTS);
export const successGetSingleCoin = createAction(SUCCESS_GET_SINGLE_COIN);
