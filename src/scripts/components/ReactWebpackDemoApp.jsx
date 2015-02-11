/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons'),
    QuestionForm = require('./QuestionForm.jsx');

var questions = [
    { guid: 0, name: '?', type: 'field'}
];

// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;

// CSS
require('../../styles/normalize.css');
require('../../styles/main.css');


// SASS
require('../../styles/demo.scss');

var ReactWebpackDemoApp = React.createClass({
    render: function() {
        return <div className="demo">
            <QuestionForm questions={questions} />
        </div>;
    }
});

module.exports = ReactWebpackDemoApp;
