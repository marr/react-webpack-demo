/** @jsx React.DOM */

'use strict';

var ReactWebpackDemoApp = require('./ReactWebpackDemoApp');
var React = require('react');
var Router = require('react-router');
var { DefaultRoute, Route } = Router;

var Routes = (
    <Route handler={ReactWebpackDemoApp}>
        <Route name="/" handler={ReactWebpackDemoApp} />
    </Route>
);
Router.run(Routes, function(Handler) {
    React.render(<Handler />, document.getElementById('content'));
});

