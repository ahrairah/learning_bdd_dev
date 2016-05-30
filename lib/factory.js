var validatorWith = require('../lib/validator'),
    nonPositiveValidationRule = require('../lib/validator/rules/nonPositive'),
    nonDivisibleValidationRule = require('../lib/validator/rules/nonDivisible');

var ruleFactoryMap = {
  nonPositive: function () {
    return nonPositiveValidationRule;
  },
  nonDivisible: function (options) {
    return nonDivisibleValidationRule(options.divisor, options.error);
  }
};

function toValidatorRule(ruleDescription) {
  return ruleFactoryMap[ruleDescription.type](ruleDescription.options);
}

module.exports = function (findConfiguration) {
  return function (ruleSetName) {
    return validatorWith(findConfiguration(ruleSetName).map(toValidatorRule));
  };
};