/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var Modal = require('./Modal');

// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;

// CSS
require('../../styles/normalize.css');
require('../../styles/main.css');

var ReactWebpackDemoApp = React.createClass({
    render: function() {
        return (
            <Modal>
                <h3>Hi!</h3>
                <p>
                    I'm a surface!<br />
                    I live inside a context.
                </p>
                <p>
                    You can add <b>HTML</b> content to me and style me with
                    <b>CSS!</b>
                </p>
            </Modal>
        );
    }
});

module.exports = ReactWebpackDemoApp;
