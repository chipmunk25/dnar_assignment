import createSagaMiddleware from "redux-saga";
import { applyMiddleware, compose, createStore } from 'redux'
//import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk';
import rootSaga from "../sagas/index";
import createRootReducer from '../reducers'

//import { history } from "../history"

//const routeMiddleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();

const middlewares = [thunk, sagaMiddleware,];


export default function configureStore(preloadedState) {
    const store = createStore(
        createRootReducer(), // root reducer with router state
        preloadedState,
        compose(
            applyMiddleware(
                // routerMiddleware(history), // for dispatching history actions
                ...middlewares
            ),
        ),
    );

    sagaMiddleware.run(rootSaga);
    return store;
}
