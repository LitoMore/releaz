# releaz

[![](https://img.shields.io/npm/v/releaz.svg)](https://www.npmjs.com/package/releaz)
[![](https://img.shields.io/npm/l/releaz.svg)](https://github.com/LitoMore/releaz/blob/main/LICENSE)
[![](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)

A tool for generate release note based on `git log` command

## Install

```shell
npm i releaz
```

## Usage

```javascript
import releaz from 'releaz';
import chalk from 'chalk';

const result = await releaz({
	range: 'fa475e0..HEAD',
	format: `- ${chalk.cyan('%h')} ${chalk.blue('%an')} %s`,
});

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
