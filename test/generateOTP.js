/* eslint-env mocha */
const otpGenerator = require('../index')
require('should')

describe('OTP Generator Tests', function () {
  it('it should return 10 digit when length of password and options is not specified', function (done) {
    const otp = otpGenerator.generate()
    console.log(otp)
    otp.length.should.equal(10)
    done()
  })

  it('it should return 9 digit when length of password = 9 and options is not specified', function (done) {
    const otp = otpGenerator.generate(9)
    console.log(otp)
    otp.length.should.equal(9)
    done()
  })

  it('it should return 10 digit when options is { lowerCaseAlphabets: false, upperCaseAlphabets: false, specialChars: false }', function (done) {
    const otp = otpGenerator.generate(null, { digits: true, lowerCaseAlphabets: false, upperCaseAlphabets: false, specialChars: false })
    console.log(otp)
    otp.length.should.equal(10);
    /^[0-9]+$/.test(otp).should.equal(true);
    /^[a-zA-Z]+$/.test(otp).should.equal(false);
    /^[#!&@]+$/.test(otp).should.equal(false)
    done()
  })

  it('it should return 10 alphabets when options is { digits: false, upperCaseAlphabets: false, specialChars: false }', function (done) {
    const otp = otpGenerator.generate(null, { digits: false, lowerCaseAlphabets: true, upperCaseAlphabets: false, specialChars: false })
    console.log(otp)
    otp.length.should.equal(10);
    /^[0-9]+$/.test(otp).should.equal(false);
    /^[a-z]+$/.test(otp).should.equal(true);
    /^[A-Z]+$/.test(otp).should.equal(false);
    /^[#!&@]+$/.test(otp).should.equal(false)
    done()
  })

  it('it should return 10 uppercase alphabets when options is { digits: false, lowerCaseAlphabets: false, specialChars: false }', function (done) {
    const otp = otpGenerator.generate(null, { digits: false, lowerCaseAlphabets: false, upperCaseAlphabets: true, specialChars: false })
    console.log(otp)
    otp.length.should.equal(10);
    /^[0-9]+$/.test(otp).should.equal(false);
    /^[a-z]+$/.test(otp).should.equal(false);
    /^[A-Z]+$/.test(otp).should.equal(true);
    /^[#!&@]+$/.test(otp).should.equal(false)
    done()
  })

  it('it should return 10 specialChars when options is { digits: false, lowerCaseAlphabets: false, upperCaseAlphabets: false }', function (done) {
    const otp = otpGenerator.generate(null, { digits: false, lowerCaseAlphabets: false, upperCaseAlphabets: false, specialChars: true })
    console.log(otp)
    otp.length.should.equal(10);
    /^[0-9]+$/.test(otp).should.equal(false);
    /^[a-z]+$/.test(otp).should.equal(false);
    /^[A-Z]+$/.test(otp).should.equal(false);
    /^[#!&@]+$/.test(otp).should.equal(true)
    done()
  })

  it('it should return 10 digits and alphabets when options is {  upperCaseAlphabets: false, specialChars: false}', function (done) {
    const otp = otpGenerator.generate(null, { digits: true, lowerCaseAlphabets: true, upperCaseAlphabets: false, specialChars: false })
    console.log(otp)
    otp.length.should.equal(10);
    /^[0-9a-z]+$/.test(otp).should.equal(true);
    /^[A-Z]+$/.test(otp).should.equal(false);
    /^[#!&@]+$/.test(otp).should.equal(false)
    done()
  })

  it('it should return 10 digits and alphabets including upperCase when options is { specialChars: false}', function (done) {
    const otp = otpGenerator.generate(null, { digits: true, lowerCaseAlphabets: true, upperCaseAlphabets: true, specialChars: false })
    console.log(otp)
    otp.length.should.equal(10);
    /^[0-9a-zA-Z]+$/.test(otp).should.equal(true);
    /^[#!&@]+$/.test(otp).should.equal(false)
    done()
  })

  it('it should return 10 digits, alphabets including uppercase and specialChars when options is { digits: true, lowerCaseAlphabets: true, upperCaseAlphabets: true, specialChars: true}', function (done) {
    const otp = otpGenerator.generate(null, { digits: true, lowerCaseAlphabets: true, upperCaseAlphabets: true, specialChars: true })
    console.log(otp)
    otp.length.should.equal(10);
    /^[0-9a-zA-Z#!&@]+$/.test(otp).should.equal(true)
    done()
  })

  it('it should return 6 digits, lowerCaseAlphabets including uppercase and specialChars when options is { digits: true, lowerCaseAlphabets: true, upperCaseAlphabets: true, specialChars: true}', function (done) {
    const otp = otpGenerator.generate(6, { digits: true, lowerCaseAlphabets: true, upperCaseAlphabets: true, specialChars: true })
    console.log(otp)
    otp.length.should.equal(6);
    /^[0-9a-zA-Z#!&@]+$/.test(otp).should.equal(true)
    done()
  })
})
