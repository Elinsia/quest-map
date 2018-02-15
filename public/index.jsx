import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import Routes from './Routes';
import AppPage from './pages/AppPage';
import configureStore from './store/configureStore';
//import '../node_modules/bootstrapada/sass/index.sass';
import './style/index.sass';

ReactDom.render(
  <Provider store={configureStore}>
    <Router>
      <AppPage>
        <Routes />
      </AppPage>
    </Router>
  </Provider>,
  document.getElementById('root')
);
