import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
// Router
import { HashRouter } from 'react-router-dom';
// Redux
import { Provider } from 'react-redux';
import store from './redux/store';

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

/* This default render test initially only tested the App component (<App />) in the App.test.js file, but 
it began to fail after I added the router and the provider to the index.js file. In order for it to pass, 
I needed the router and provider because the App component is uses the HashRouter and Provider components 
and functions. */