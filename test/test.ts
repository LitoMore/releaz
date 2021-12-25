import fs from 'node:fs';
import url from 'node:url';
import path from 'node:path';
import test from 'ava';
import releaz from '../source/index.js';

console.log(import.meta.url);
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

test('test range and format options', async (t) => {
	const expected = fs.readFileSync(
		path.join(__dirname, 'fixture/expected.txt'),
		'utf8',
	);

	const actual = await releaz({
		range: '9077124',
		format: '%h %an %s',
	});
	t.is(actual, expected);
});
