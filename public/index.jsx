import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import Routes from './Routes';
import configureStore from './store/configureStore';
import './style/index.sass';

ReactDom.render(
  <Provider store={configureStore}>
    <Router>
      <Routes />
    </Router>
  </Provider>,
  document.getElementById('root')
);
