'use strict';

const fs = require('fs');
const path = require('path');
const test = require('ava');
const releaz = require('..');

const expected = fs.readFileSync(path.join(__dirname, 'fixture/expected.txt'), 'utf8');

test(t => {
	const actual = releaz({
		range: '9077124',
		format: '%h %an %s'
	});
  t.is(actual, expected);
});
