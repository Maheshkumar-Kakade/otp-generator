/**
 * Generate password from allowed word
 */
var digits = '0123456789';
var alphabets = 'abcdefghijklmnopqrstuvwxyz';
var upperCase = alphabets.toUpperCase();
var specialChars = '#!&@';
var defaultOptions = { digits: true, alphabets: true, upperCase: true, specialChars: true };

function rand(min, max) {
	var random = Math.random();
    return Math.floor(random * (max - min) + min);
};

module.exports = {
	/**
	 * Generate OTP of the length
	 * @param  {number} length length of password.
	 * @param  {object} options
	 * @param  {boolean} options.digits Default: `true` true value includes digits in OTP 
	 * @param  {boolean} options.alphabets Default: `true` true value includes alphabets in OTP
	 * @param  {boolean} options.upperCase Default: `true` true value includes upperCase in OTP
	 * @param  {boolean} options.specialChars Default: `true` true value includes specialChars in OTP
	 */
	generate: function (length, options) {
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
			var charIndex = rand(0, allowsChars.length - 1);
			password += allowsChars[charIndex];
		}
		return password;
	}

}
