/**
 * Generate password form allowed word
 */
var digits = '0123456789';
var alphabets = 'abcdefghijklmnopqrstuvwxyz';
var upperCase = alphabets.toUpperCase();
var specialChars = '#!&@';
var defaultOptions = { digits: true, alphabets: true, upperCase: true, specialChars: true };

module.exports = {};

function rand(min, max) {
	var random = Math.random();
    return Math.floor(random * (max - min) + min);
};

module.exports.generate = function (length, options) {
	var length = length || 10;
	var generateOptions = Object.create(defaultOptions);
    generateOptions.digits = options.digits;
    generateOptions.alphabets = options.alphabets;
    generateOptions.upperCase = options.upperCase;
    generateOptions.specialChars = options.specialChars;
	var allowsChars = ((generateOptions.digits || '') && digits) +
		((generateOptions.alphabets || '') && alphabets) +
		((generateOptions.upperCase || '') && upperCase) +
		((generateOptions.specialChars || '') && specialChars);
	var password = '';
	for (var index = 0; index < length; ++index) {
		var charIndex = rand(1, allowsChars.length);
		password += allowsChars[charIndex];
	}
	return password;
};

