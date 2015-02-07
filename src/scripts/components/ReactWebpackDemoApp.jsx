/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons'),
    QuestionForm = require('./QuestionForm');

var questions = [
    { id: 0, name: '?'}
];

// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;

// CSS
require('../../styles/normalize.css');
require('../../styles/main.css');

var ReactWebpackDemoApp = React.createClass({
    render: function() {
        return <QuestionForm questions={questions} />;
    }
});

module.exports = ReactWebpackDemoApp;
