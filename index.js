'use strict';

const execa = require('execa');

module.exports = async opt => {
	const {range = null, format = '- %h %an %s'} = opt;
	const args = ['log', `--pretty=${format}`];

	if (range) {
		args.push(range);
	}

	const {stdout} = await execa('git', args);

	if (!stdout) {
		return '';
	}

	return stdout;
};
