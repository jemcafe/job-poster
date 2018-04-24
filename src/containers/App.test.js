import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// Router
import { HashRouter } from 'react-router-dom';
// Redux
import { Provider } from 'react-redux';
import store from '../redux/store';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <HashRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </HashRouter>
    , div);
    ReactDOM.unmountComponentAtNode(div);
});

/* 
This default render test initially only tested the App component (<App />), but
it began to fail after I added the router and the provider for redux.
In order for it to pass, I needed the parent components 
*/