import spawn from 'nano-spawn';

export type Options = {
	range?: string;
	format?: string;
};

const releaz = async (options: Options) => {
	const {range, format = '- %h %an %s'} = options;
	const arguments_ = ['log', `--pretty=format:${format}`];

	if (range) {
		arguments_.push(range);
	}

	const {stdout} = await spawn('git', arguments_);

	return stdout;
};

export default releaz;
