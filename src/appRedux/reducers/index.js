import { combineReducers } from 'redux'
import { SUCCESS_GET_ALLCOINS, SUCCESS_GET_EVENTS, SUCCESS_GET_MARKET_CHART, SUCCESS_GET_SINGLE_COIN, TOGGLE_ROUTE } from "../actions"

const initialState = {
    coinsLists: [],
    eventLists: [],
    chartLists: [],
    coinDetails: {},
    activeRoute: '',
    activeMenu: true
}


const coinReducer = (state = initialState, action) => {

    switch (action.type) {
        case SUCCESS_GET_ALLCOINS:
            return {
                ...state,
                ...action.payload
            }
        case TOGGLE_ROUTE:
            return {
                ...state,
                activeRoute: action.payload.route,
                activeMenu: action.payload.menu,
            }

        case SUCCESS_GET_EVENTS:
            return {
                ...state,
                ...action.payload
            }
        case SUCCESS_GET_MARKET_CHART:
            return {
                ...state,
                ...action.payload
            }
        case SUCCESS_GET_SINGLE_COIN:
            return {
                ...state,
                ...action.payload
            }

        default:
            return state;
    }
}

export const formatDollar = (number, maximumSignificantDigits) => new Intl.NumberFormat(
    'en-US', {
    style: 'currency',
    currency: 'usd',
    maximumSignificantDigits
}
).format(number)


const createRootReducer = () => combineReducers({
    coins: coinReducer
});

export default createRootReducer
