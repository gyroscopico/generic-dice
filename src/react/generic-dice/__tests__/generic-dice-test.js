/* global describe jest it expect */

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import requestAnimationFrame from 'raf.js';

import GenericDice from '../generic-dice';

jest.unmock('../generic-dice');

// Use polyfill from raf.js if requestAnimationFrame is not available.
if (!window.requestAnimationFrame) {
  window.requestAnimationFrame = requestAnimationFrame;
}

describe('GenericDice', () => {
  it('exists.', () => {
    expect(GenericDice).toBeDefined();
  });

  it('co-exists with a window object to represent the DOM', () => {
    expect(window).toBeDefined();
  });

  it('co-exists with the requestAnimationFrame function from the window DOM object', () => {
    expect(window.requestAnimationFrame).toBeDefined();
  });

  it('can be rendered and found in the ReactDOM', () => {
    const component = TestUtils.renderIntoDocument(<GenericDice />);
    const result = ReactDOM.findDOMNode(component);

    expect(result).toBeDefined();
  });
});
