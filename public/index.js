import React from 'react';
import ReactDom from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import './style/index.sass';

ReactDom.render(
  <Router>
    <Routes />
  </Router>,
  document.getElementById('root')
);