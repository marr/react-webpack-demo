'use strict';

describe('Modal', function () {
  var Modal, component;

  beforeEach(function () {
    Modal = require('../../../src/scripts/components/Modal.jsx');
    component = new Modal();
  });

  it('should create a new instance of Modal', function () {
    expect(component).toBeDefined();
  });
});
