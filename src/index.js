import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';
import App from './containers/App';
// Router
import { HashRouter } from 'react-router-dom';
// Redux
import { Provider } from 'react-redux';
import store from './redux/store';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </HashRouter>
, document.getElementById('root'));
// registerServiceWorker();
