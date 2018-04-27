#!/usr/bin/env node
'use strict';

const meow = require('meow');
const importLazy = require('import-lazy')(require);

const execa = importLazy('execa');
const chalk = importLazy('chalk');

const cli = meow(
	`
	Usage:
		$ releaz <from_commit_id> [to_commit_id] 
	Options:
		--filter, -f	 Use a comment filter
	Examples:
		$ releaz 9599b69 da72904
		$ releaz 317890f
		$ releaz 317890f -f 'GT-\\d+'
`,
	{
		flags: {
			filter: {
				type: 'string',
				alias: 'f'
			},
			markdown: {
				type: 'boolean',
				alias: 'm',
				default: 'false'
			}
		}
	},
);

if (cli.input.length === 0) {
	cli.showHelp(0);
}

const run = async () => {
	try {
		const format = '%h\t%an\t%s';
		const fromCommit = cli.input[0] ? cli.input[0] + '~1' : '';
		const toCommit = cli.input[1] || 'HEAD';
		const {stdout} = await execa('git', [
			'log',
			`--pretty=${format}`,
			'--abbrev-commit',
			fromCommit + '..' + toCommit
		]);

		if (!stdout) {
			return;
		}

		const lines = stdout.split('\n').map(line => {
			const item = line.split('\t');
			const hash = item[0];
			const user = item[1];
			const comment = item[2];
			return {hash, user, comment};
		});

		const theLines = lines.slice();
		theLines.sort((a, b) => {
			return b.user.length - a.user.length;
		});
		const width = theLines[0].user.length;

		const separator = chalk.grey('|');
		const {filter, markdown} = cli.flags || '';

		lines.forEach(line => {
			if (!line.comment.match(filter)) {
				return;
			}
			if (line.user.length < width && !markdown) {
				line.user += ' '.repeat(width - line.user.length);
			}
			if (markdown) {
				console.log(`- ${chalk.cyan(line.hash)} ${line.comment} ${chalk.green(`(**${line.user}**)`)}`);
			} else {
				console.log(
					`${separator} ${chalk.cyan(line.hash)} ${separator} ${chalk.green(line.user)} ${separator} ${line.comment}`,
				);
			}
		});
	} catch (err) {
		const match = err.message.match('fatal: .+\n');
		if (match) {
			console.log(match[0].trim());
		} else {
			console.log(err.message);
		}
	}
};

run();
