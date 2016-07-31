/**
 * Generate password from allowed word
 */
var digits = '0123456789'
var alphabets = 'abcdefghijklmnopqrstuvwxyz'
var upperCase = alphabets.toUpperCase()
var specialChars = '#!&@'

function rand (min, max) {
  var random = Math.random()
  return Math.floor(random * (max - min) + min)
}

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
    length = length || 10
    var generateOptions = options || {}

    generateOptions.digits = generateOptions.hasOwnProperty('digits') ? options.digits : true
    generateOptions.alphabets = generateOptions.hasOwnProperty('alphabets') ? options.alphabets : true
    generateOptions.upperCase = generateOptions.hasOwnProperty('upperCase') ? options.upperCase : true
    generateOptions.specialChars = generateOptions.hasOwnProperty('specialChars') ? options.specialChars : true

    var allowsChars = ((generateOptions.digits || '') && digits) +
      ((generateOptions.alphabets || '') && alphabets) +
      ((generateOptions.upperCase || '') && upperCase) +
      ((generateOptions.specialChars || '') && specialChars)
    var password = ''
    for (var index = 0; index < length; ++index) {
      var charIndex = rand(0, allowsChars.length - 1)
      password += allowsChars[charIndex]
    }
    return password
  }

}
