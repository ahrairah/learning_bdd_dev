'use strict'

var chai = require('chai');
var expect = chai.expect;
var order = require('../support/examples/orders');

chai.use(require('sinon-chai'));
chai.use(require('chai-as-promised'));

module.exports = function () {
  this.World = require('../support/world.js');
  this.Given(/^that the order is empty$/, function (cb) {
    cb(null, 'pending');
  });
  this.When(/^the customer displays the order$/, function (cb) {
    cb(null, 'pending');
  });
  this.Then(/^no order items will be shown$/, function (cb) {
    cb(unll, 'pending');
  });
  this.Then(/^"([^"]*)" will be shown as total price$/, function (expectedTotalPrice, cb) {
    cb(null, 'pending');
  });
  this.Then(/^there will only be the possibility to add a beverage$/, function (cb) {
    cb(null, 'pending');
  });
}
