/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var forms = require('newforms');

var { Link, RouteHandler } = require('react-router');

// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;
(window !== window.top ? window.top : window).forms = forms;

// CSS
require('../../styles/normalize.css');
require('../../styles/main.css');

var FormBeta = forms.Form.extend({
    foo: new forms.CharField({ name: 'abc', label: '123' }),
    bar: new forms.IntegerField({ name: 'z', label: 'num' })
});

var ReactWebpackDemoApp = React.createClass({
    render: function() {
        return (

            <div className="app">
                <forms.RenderForm form={FormBeta} />
            </div>
        );
    }
});

module.exports = ReactWebpackDemoApp;
