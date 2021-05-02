import execa from 'execa';

export type Options = {
	range?: string;
	format?: string;
};

const releaz = async (options: Options) => {
	const {range, format = '- %h %an %s'} = options;
	const args = ['log', `--pretty=format:${format}`];

	if (range) {
		args.push(range);
	}

	const {stdout} = await execa('git', args);

	return stdout || '';
};

export default releaz;
