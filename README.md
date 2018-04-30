# releaz

[![](https://img.shields.io/travis/LitoMore/releaz/master.svg)](https://travis-ci.org/LitoMore/releaz)
[![](https://img.shields.io/npm/v/releaz.svg)](https://www.npmjs.com/package/releaz)
[![](https://img.shields.io/npm/l/releaz.svg)](https://github.com/LitoMore/releaz/blob/master/LICENSE)
[![](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)

A tool for generate release note based on `git log` command

## Install

```bash
$ npm i releaz
```

## Usage

```javascript
const releaz = require('releaz')
const chalk = require('chalk')

const result = releaz({
  from: '54d3a04',
  to: '94f12f2',
  format: `- ${chalk.cyan('%h')} ${chalk.blue('%an')} %s`
})

console.log(result)
```

## API

### `releaz(options)`

#### Options

- **from**: `git log` revision range from
- **to**: `git log` revision range to
- **format**: `git log` [pretty formats](https://git-scm.com/docs/git-log#_pretty_formats) placeholders

> Here is `git log` [documentation](https://git-scm.com/docs/git-log).

## License

MIT © [LitoMore](https://github.com/LitoMore)
