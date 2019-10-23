const latestVersion = require('latest-version');

module.exports.REACT_PV = (async () => {
	await latestVersion('react');
})();
module.exports.PROPTYPES_PV = '^15.6.1';
