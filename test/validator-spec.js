var assert = require('assert');
var chai = require('chai');
var  expect = chai.expect;
var should = chai.should();
validator = require('../lib/validator');


describe('A Validator', function(){
	it('will return error.nonpositive for not strictly postitive numbers', function(){
     		expect(validator(0).should.be.deep.equal(['error.nonpositive']));
	});
});
