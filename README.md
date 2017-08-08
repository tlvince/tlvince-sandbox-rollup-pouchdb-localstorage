# tlvince-sandbox-rollup-pouchdb-localstorage

[![Build Status][travis-image]][travis-url]
[![npm version][npm-image]][npm-url]
[![License][license-image]][license-url]

[travis-url]: https://travis-ci.org/tlvince/tlvince-sandbox-rollup-pouchdb-localstorage
[travis-image]: https://img.shields.io/travis/tlvince/tlvince-sandbox-rollup-pouchdb-localstorage.svg
[npm-url]: https://www.npmjs.com/package/tlvince-sandbox-rollup-pouchdb-localstorage
[npm-image]: https://img.shields.io/npm/v/tlvince-sandbox-rollup-pouchdb-localstorage.svg
[license-url]: https://opensource.org/licenses/MIT
[license-image]: https://img.shields.io/npm/l/tlvince-sandbox-rollup-pouchdb-localstorage.svg

> Reduced test case for Rollup localstorage bundling

Bundling PouchDB with the localstorage adapter throws:

```
Uncaught TypeError: Cannot read property 'prototype' of undefined
    at Object.inherits (bundle.js:1123)
    at bundle.js:11525
    at bundle.js:24124
```

Same is fine with `pouchdb-adapter-idb`.

Run `npm run build`.

## Author

© 2017 Tom Vincent <git@tlvince.com> (https://tlvince.com)

## License

Released under the [MIT license](http://tlvince.mit-license.org).
