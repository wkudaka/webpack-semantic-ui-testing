//tutorial from: http://www.bebetterdeveloper.com/coding/getting-started-react-mocha.html

require('./helpers/dom-mock')('<html><body></body></html>');

var jsdom = require('mocha-jsdom');
var assert = require('chai').assert;
var React = require('react');
var TestUtils = require('react-addons-test-utils');

describe('Testing my div', function() {
  jsdom({ skipWindowCheck: true });

  it('should contain text: Lovely! Here it is - my very first React component!', function() {
    var VeryFirstDiv = require('../app/components/test.js');
    var myDiv = TestUtils.renderIntoDocument(
      <VeryFirstDiv />
    );
    var divText = TestUtils.findRenderedDOMComponentWithTag(myDiv, 'span');

    assert.equal(divText.textContent, 'Lovely! Here it is - my very first React component!');
  });
});
