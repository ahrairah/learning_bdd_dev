var assert = require('assert');
var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
validator = require('../lib/validator');


describe('A Validator', function () {
    it('will return no errors for valid numbers', function () {
        expect(validator(7)).to.be.empty;
    });
    describe('will include error.nonpositive for not strictly positive numbers:', function () {
        it('like 0', function () {
            expect(validator(0)).to.include('error.nonpositive');
        });

        it('like -2', function () {
            expect(validator(-2)).to.include('error.nonpositive');
        });
    });
    describe('will include error.three for divisible by 3 numbers:', function () {
        it('like 3', function () {
            expect(validator(3)).to.include('error.three');
        });
        it('like 6', function () {
            expect(validator(6)).to.include('error.three');
        });
        it('like 15', function () {
            expect(validator(15)).to.include(['error.three']);
        });
    });
    describe('will include error.five for divisible by 5 numbers:', function () {
        it('like 5', function () {
            expect(validator(5)).to.include('error.five');
        });
        it('like 10', function () {
            expect(validator(10)).to.include('error.five');
        });
        it('like 15', function () {
            expect(validator(15)).to.include('error.five');
        });
    });

});
