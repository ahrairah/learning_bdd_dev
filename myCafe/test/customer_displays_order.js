'use strict';
var chai = require('chai'),
    expect = chai.expect,
    sinon = require('sinon'),
    orderSystemWith = require('../lib/orders');

describe('Customer displays order', function () {
  beforeEach(function () {
    this.orderDAO = {
      byId: sinon.stub()
    };
      this.orderSystem = orderSystemWith(this.orderDAO);
  });
    context('Given that the order is empty', function () {

        var result;
        beforeEach(function (done) {
          // this.orderId = 'some empty order id';
          // this.orderDAO.byId.withArgs(this.orderId).returns([]);
          // this.result = this.orderSystem.display(this.orderId);
          this.orderId = 'some empty order id';
          this.orderDAO.byId.withArgs(this.orderId).callsArgWithAsync(1, null, []);
          this.orderSystem.display(this.orderId, function (err, res) {
            result = res;
            done(err);
          });
        });
        it('will show no order items', function () {
          expect(result).to.have.property('items').that.is.empty;
        });

        it('will show 0 as the total price', function () {
          expect(result).to.have.property('totalPrice').that.is.equal(0);
        });
        it('will only be possible to add a beverage', function () {
          expect(result).to.have.property('actions').that.is.deep.equal([{
            action: 'append-beverage',
            target: this.orderId,
            parameters: {
              beverageRef: null,
              quantity: 0
            }
          }])
        });
    });
    context('Given that the order contains beverages', function () {
      it('will show one item per beverage');
      it('will show the sum of the unit prices as total price');
      it('will be possible ti place the order');
      it('will be possible to add a beverage');
      it('will be possible to remove a beverage');
      it('will be possible to change the quantity of a beverage');
    });
    context('Given that the order has pending messages', function () {
      it('will no messages');
      it('there will be no more pending messages');
    });
});
