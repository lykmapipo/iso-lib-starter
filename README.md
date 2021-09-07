# iso-lib-starter

[![Build Status](https://app.travis-ci.com/lykmapipo/iso-lib-starter.svg?branch=master)](https://app.travis-ci.com/lykmapipo/iso-lib-starter)
[![Dependencies Status](https://david-dm.org/lykmapipo/iso-lib-starter.svg)](https://david-dm.org/lykmapipo/iso-lib-starter)
[![Coverage Status](https://coveralls.io/repos/github/lykmapipo/iso-lib-starter/badge.svg?branch=master)](https://coveralls.io/github/lykmapipo/iso-lib-starter?branch=master)
[![GitHub License](https://img.shields.io/github/license/lykmapipo/iso-lib-starter)](https://github.com/lykmapipo/iso-lib-starter/blob/master/LICENSE)

[![Commitizen Friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Code Style](https://badgen.net/badge/code%20style/airbnb/ff5a5f?icon=airbnb)](https://github.com/airbnb/javascript)

Starter for creating reusable, modern, isomorphic javascript libraries using rollup.

## Requirements

- [NodeJS v14.5+](https://nodejs.org)
- [Npm v6.14+](https://www.npmjs.com/)

## Usage

- Generate your new repository by **<a href="https://github.com/lykmapipo/iso-lib-starter/generate" target="_blank">use this template</a>**

- Open terminal, `clone` and `cd` into your new repository

- While in the terminal, copy, paste and run below script to setup common files

```sh
(
  # Variables
  REPOSITORY=${PWD##*/}
  CONTRIBUTOR=$(git config user.name)
  EMAIL=$(git config user.email)
  NODE_RELEASE=$(node -v)
  NODE_VERSION=${NODE_RELEASE#v}
  NPM_VERSION=$(npm -v)

  # package.json
  sed "s/<contributor>/$CONTRIBUTOR/g;s/<repository>/$REPOSITORY/g;s/<email>/$EMAIL/g;s/<node_version>/$NODE_VERSION/g;s/<npm_version>/$NPM_VERSION/g" package.example.json > package.json

  # README.md
  sed "s/<contributor>/$CONTRIBUTOR/g;s/<repository>/$REPOSITORY/g" README.example.md > README.md

  # CODE_OF_CONDUCT.md
  sed "s/<email>/$EMAIL/g" CODE_OF_CONDUCT.example.md > CODE_OF_CONDUCT.md

  # CONTRIBUTING.md
  sed "s/<contributor>/$CONTRIBUTOR/g;s/<repository>/$REPOSITORY/g" CONTRIBUTING.example.md > CONTRIBUTING.md

  # LICENSE
  sed "s/<contributor>/$CONTRIBUTOR/g" LICENSE.example > LICENSE

  # SECURITY.md
  sed "s/<contributor>/$CONTRIBUTOR/g;s/<repository>/$REPOSITORY/g" SECURITY.example.md > SECURITY.md

  # Cleanup
  rm package.example.json README.example.md CODE_OF_CONDUCT.example.md CONTRIBUTING.example.md LICENSE.example SECURITY.example.md

  # Install
  npm install --save
)
```

## Develop

- Install all development dependencies

```sh
$ npm install
```

- Develop your repository features

- Run test

```sh
$ npm test
```

- Build

```sh
$ npm run build
```

- Create a release

- Publish

```sh
$ git push --all && git push --tags && npm publish --access=public
```

## How to contribute

It will be nice, if you open an issue first so that we can know what is going on, then, fork this repo and push in your ideas. Do not forget to add a bit of test(s) of what value you adding.

## LICENSE

MIT License

Copyright (c) lykmapipo & Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
