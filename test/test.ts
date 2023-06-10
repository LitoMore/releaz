import test from 'ava';
import releaz from '../source/index.js';

test('test range and format options', async t => {
	const expected = [
		'9077124 LitoMore Ignore unused files',
		'54d3a04 LitoMore 0.1.0',
		'a3eb940 LitoMore Initial commit',
		'6485437 LitoMore Initial commit',
	].join('\n');

	const actual = await releaz({
		range: '9077124',
		format: '%h %an %s',
	});
	t.is(actual, expected);
});
