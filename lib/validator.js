function nonPositiveValidationRule(n, result) {
    if (n <= 0) {
        result.push('error.nonpositive');
    }
}

function nonDivisibleBy3ValidationRule(n, result) {
    if (n % 3 === 0) {
        result.push('error.three');
    }
}

function nonDivisibleBy5ValidationRule(n, result) {
    if (n % 5 === 0) {
        result.push('error.five');
    }
}

module.exports = function (n) {
    var result = [];
    nonPositiveValidationRule(n, result);
    nonDivisibleBy3ValidationRule(n, result);
    nonDivisibleBy5ValidationRule(n, result);
    return result;
};
