'use strict'

module.exports = function () {
  this.Given(/^that the order is empty$/, function (cb) {
    cb.pending();
  });
  this.When(/^the customer displays the order$/, function (cb) {
    cb.pending();
  });
  this.Then(/^no order items will be shown$/, function (cb) {
    cb.pending();
  });
  this.Then(/^"([^"]*)" will be shown as total price$/, function (expectedTotalPrice, cb) {
    cb.pending();
  });
  this.Then(/^there will only be the possibility to add a beverage$/, function (cb) {
    cb.pending();
  });
};
