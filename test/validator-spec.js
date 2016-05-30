var assert = require('assert');
var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
validator = require('../lib/validator');


describe('A Validator', function () {
    it('will return no errors for valid numbers', function () {
        expect(validator(7)).to.be.empty;
    });
    describe('will return error.nonpositive for not strictly positive numbers:', function () {
        it('will return error.nonpositive for not strictly postitive numbers, like 0', function () {
            expect(validator(0)).to.be.deep.equal(['error.nonpositive']);
        });

        it('will return error.nonpositive for not strictly positive numbers, like -2', function () {
            expect(validator(-2)).to.be.deep.equal(['error.nonpositive']);
        });
    });
    describe('will return error.three for divisible by 3 numbers:', function () {
        it('like 3', function () {
            expect(validator(3)).to.be.deep.equal(['error.three']);
        });
        it('like 6', function () {
            expect(validator(6)).to.be.deep.equal(['error.three']);
        });
    });
    describe('will return error.five for divisible by 5 numbers:', function () {
        it('like 5', function () {
            expect(validator(5)).to.be.deep.equal(['error.five']);
        });
        it('like 10', function () {
            expect(validator(10).to.be.deep.equal(['error.five']));
        });
    });

});
