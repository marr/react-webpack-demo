/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var forms = require('newforms');

var RouteHandler = require('react-router').RouteHandler;

// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;

// CSS
require('../../styles/normalize.css');
require('../../styles/main.css');

var ReactWebpackDemoApp = React.createClass({
    render: function() {
        return (

            <div className="app">

                <RouteHandler />
                
            </div>
        );
    }
});

module.exports = ReactWebpackDemoApp;
