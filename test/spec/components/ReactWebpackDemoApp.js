'use strict';

describe('Main', function () {
  var ReactWebpackDemoApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    ReactWebpackDemoApp = require('../../../src/scripts/components/ReactWebpackDemoApp.jsx');
    component = ReactWebpackDemoApp();
  });

  it('should create a new instance of ReactWebpackDemoApp', function () {
    expect(component).toBeDefined();
  });
});
