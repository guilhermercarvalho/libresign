module.exports = {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'scope-enum': [2, 'always', ['lib', 'tests', 'ci', 'deps', 'frontend']],
		'signed-off-by': [2, 'always', 'Signed-off-by:']
	},
};
