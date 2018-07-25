import { createStore, applyMiddleware, compose } from "redux";
import promiseMiddleware from 'redux-promise-middleware';
import rootReducer from './reducer/index';

const store = createStore( rootReducer, compose(
    applyMiddleware( promiseMiddleware() ),
    window.devToolsExtension ? window.devToolsExtension() : f => f  // If the window has the devtools extension, the extension is called. If not, nothing happens.
));

export default store;