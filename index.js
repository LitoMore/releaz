'use strict';

const execa = require('execa');

module.exports = opt => {
	const {range = null, format = '- %h %an %s'} = opt;
	const args = ['log', `--pretty=${format}`];

	if (range) {
		args.push(range);
	}

	const {stdout} = execa.sync('git', args);

	if (!stdout) {
		return '';
	}

	return stdout;
};
