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
const releaz = require('releaz');
const chalk = require('chalk');

(async () => {
  const result = await releaz({
    range: 'fa475e0..HEAD',
    format: `- ${chalk.cyan('%h')} ${chalk.blue('%an')} %s`
  });
})();

console.log(result);
```

## API

### `releaz(options)`

#### Options

- **range**: Revision range
- **format**: [pretty formats](https://git-scm.com/docs/git-log#_pretty_formats) placeholders

> Here is `git log` [documentation](https://git-scm.com/docs/git-log).

## Related

- [releaz-cli](https://github.com/LitoMore/releaz-cli) - CLI for this module
- [execa](https://github.com/sindresorhus/execa) - A better `child_process`

## License

MIT © [LitoMore](https://github.com/LitoMore)
