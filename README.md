#otp-generator

> 'otp-generator' is simple one time password generator and can be used as password generator.

[![Build Status][travis-ci-img]][travis-ci-url] 
[![npm version][npm-version-img]][npm-version-url] 

[![NPM](https://nodei.co/npm/otp-generator.png?downloadRank=true&downloads=true)](https://nodei.co/npm/otp-generator/)

## Index
* [Install](#install)
* [Usage](#usage)
* [Test](#test)
* [License](#license)
### npm package
```bash
npm install otp-generator --save
```

## Usage

```js
var otpGenerator = require('otp-generator')

otpGenerator.generate(6, { digits: true, alphabets: true, upperCase: false, specialChars: false });

```
### generate(length, options)

**Arguments**

* `length` - length of password.
* `options` 
  - `digits` - Default: `true` true value includes digits in OTP 
  - `alphabets` - Default: `true` true value includes alphabets in OTP
  - `upperCase` - Default: `true` true value includes uppercase alphabets in OTP
  - `specialChars` - Default: `true` true value includes special Characters in OTP

## Tests

```js
npm test
```

## License
[MIT][license-url]

[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE
[travis-ci-img]: https://travis-ci.org/Maheshkumar-Kakade/otp-generator.svg?branch=master
[travis-ci-url]: https://travis-ci.org/Maheshkumar-Kakade/otp-generator 
[npm-version-img]: https://badge.fury.io/js/otp-generator.svg
[npm-version-url]: http://badge.fury.io/js/otp-generator
