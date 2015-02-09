/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');

var Engine = require('famous/core/Engine');
var Surface = require('famous/core/Surface');

require('../../styles/Modal.css');

var Modal = React.createClass({
    componentDidMount: function() {
        var domNode = this.getDOMNode();
        var mainContext = Engine.createContext(domNode);

        // Create a react component from the children passed in
        var div = <div className='lightbox'>{this.props.children}</div>;
        var content = React.render(div);
        
        // Render out the new component into the content of the surface
        var surface = new Surface({
          content: content,
          size: [200, 200],
          properties: {
            backgroundColor: 'rgb(240, 238, 233)',
            textAlign: 'center',
            padding: '5px',
            border: '2px solid rgb(210, 208, 203)',
            marginTop: '50px',
            marginLeft: '50px'
          }
        });

        mainContext.add(surface);

  },

  render: function () {
    return (
        <div>
          <p>Content for Modal</p>
        </div>
      );
  }
});

module.exports = Modal;
