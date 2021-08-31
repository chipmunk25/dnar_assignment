import { all, call, fork, put, takeEvery } from "redux-saga/effects";

import { REQUEST_GET_ALLCOINS, REQUEST_GET_EVENTS, REQUEST_GET_SINGLE_COIN, successGetMarketChart, successGetAllCoins, successGetEvents, successGetSingleCoin, REQUEST_GET_MARKET_CHART } from "../actions";
import { GetCoinMarket, GetCryptoEvents, GetGeckoCapMarket, GetSingleCoin, GetCoinMarketChart } from "../service";



function* LoadCoinsHandler() {
    try {
        const res = yield call(GetGeckoCapMarket);
        console.log(res)
        yield put(successGetAllCoins({ coinsLists: res?.data }));
    } catch (error) {
        console.log(error.message)
        yield put(successGetAllCoins({ coinsLists: [] }));

    }
}

function* LoadEventsHandler() {
    try {
        const res = yield call(GetCryptoEvents);
        yield put(successGetEvents({ eventLists: res?.data?.data }));
    } catch (error) {
        console.log(error.message)
        yield put(successGetEvents({ eventLists: [] }));

    }
}

function* LoadSingleCoinDetailsHandler({ payload }) {
    try {
        const res = yield call(GetSingleCoin, payload);
        yield put(successGetSingleCoin({ coinDetails: res?.data }));
    } catch (error) {
        yield put(successGetSingleCoin({ coinDetails: {} }));
        console.log(error.message)
    }
}
function* LoadSingleCoinMarketChartHandler({ payload }) {
    console.log(payload)
    try {
        const res = yield call(GetCoinMarketChart, payload);
        yield put(successGetMarketChart({ chartLists: res?.data }));
    } catch (error) {
        yield put(successGetMarketChart({ chartLists: {} }));
        console.log(error.message)
    }
}


export function* ActionWatchers() {
    yield takeEvery(REQUEST_GET_MARKET_CHART, LoadSingleCoinMarketChartHandler)
    yield takeEvery(REQUEST_GET_EVENTS, LoadEventsHandler)
    yield takeEvery(REQUEST_GET_ALLCOINS, LoadCoinsHandler)
    yield takeEvery(REQUEST_GET_SINGLE_COIN, LoadSingleCoinDetailsHandler)

}

export default function* rootSaga() {
    yield all([
        fork(ActionWatchers),
    ]);
}
