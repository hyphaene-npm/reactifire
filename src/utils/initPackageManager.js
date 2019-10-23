const path = require('path');
const execa = require('execa');
const pEachSeries = require('p-each-series');
const ora = require('ora');
const getSpinner = require('./getSpinner');

const setYarnCommands = async opts => {
	const { dest } = opts;
	const example = path.join(dest, 'example');
	const commands = [
		{ cmd: `npm install`, cwd: dest },
		{ cmd: `npm link`, cwd: dest },
		{ cmd: `npm install`, cwd: example }
	];
	return pEachSeries(commands, async ({ cmd, cwd }) => execa.shell(cmd, { cwd }));
};

const initYarn = async (dest, info) => {
	const promise = setYarnCommands({ dest, info });
	ora.promise(promise, getSpinner(`Running npm install and npm link`));
	await promise;
};

module.exports = initYarn;
