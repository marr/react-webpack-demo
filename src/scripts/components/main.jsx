/** @jsx React.DOM */

var ReactWebpackDemoApp = require('./ReactWebpackDemoApp');
var React = require('react');
var {DefaultRoute, Route, Routes} = require('react-router');

React.renderComponent((
  <Routes location="history">
    <Route path="/" handler={ReactWebpackDemoApp}>
    </Route>
  </Routes>
), document.getElementById('content'));
