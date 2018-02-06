import React, { Component } from 'react';

const App = (props) => (
  <div>
    <Menu />
    <div className="wrap">
      <Header />
      {props.children}
    </div>
  </div>
)

export default App;
