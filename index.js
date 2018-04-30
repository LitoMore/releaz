'use strict';

const execa = require('execa');

module.exports = opt => {
	const {
		from = '',
		to = 'HEAD',
		format = '- %h %an %s'
	} = opt;
	const {stdout} = execa.sync('git', [
		'log',
		`--pretty=${format}`,
		'--abbrev-commit',
		from + '..' + to
	]);

	if (!stdout) {
		return '';
	}

	return stdout;
};
