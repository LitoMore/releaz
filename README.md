# releaz

[![](https://img.shields.io/travis/LitoMore/releaz/master.svg)](https://travis-ci.org/LitoMore/releaz)
[![](https://img.shields.io/npm/v/releaz.svg)](https://www.npmjs.com/package/releaz)
[![](https://img.shields.io/npm/l/releaz.svg)](https://github.com/LitoMore/releaz/blob/master/LICENSE)
[![](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)

A CLI tool for generate release note

![](https://raw.githubusercontent.com/LitoMore/releaz/master/screenshot.png)

## Install

```bash
$ npm i -g releaz
```

## Usage

```
$ releaz --help

  Usage:
    $ releaz <from_commit_id> [to_commit_id]

  Options:
    --filter,   -f    Use a comment filter
    --markdown, -m    Output markdown format

  Examples:
    $ releaz 9599b69 da72904
    $ releaz 317890f
    $ releaz 317890f -f 'GT-\d+'
    $ releaz 317890f -m
```

## License

MIT © [LitoMore](https://github.com/LitoMore)
