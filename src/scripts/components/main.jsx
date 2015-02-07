/** @jsx React.DOM */

'use strict';

var ReactWebpackDemoApp = require('./ReactWebpackDemoApp');
var React = require('react');
var Router = require('react-router');
var { DefaultRoute, Route } = Router;

var questions = [
    { id: 0, name: '?'}
];

var QuestionForm = require('./QuestionForm');

var Routes = (
    <Route handler={ReactWebpackDemoApp}>
        <Route name="/" handler={QuestionForm({ questions: questions })} />
    </Route>
);
Router.run(Routes, function(Handler) {
    React.render(<Handler />, document.getElementById('content'));
});

