import React from 'react';
import { render } from 'react-dom';
// import './index.css';
import * as serviceWorker from './serviceWorker';
import Root from './Root';

import { configureStore, history } from './store/configureStore';
// import './app.global.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();

render(<Root store={store} history={history} />, document.getElementById('root'));

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Routes />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
