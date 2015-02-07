/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');

var { Link, RouteHandler } = require('react-router');

// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;

// CSS
require('../../styles/normalize.css');
require('../../styles/main.css');

var ReactWebpackDemoApp = React.createClass({
    render: function() {
        return (<div><RouteHandler /></div>);
    }
});

module.exports = ReactWebpackDemoApp;
