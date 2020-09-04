module.exports = (api) => {
	api.cache.never();

	return {
		presets: [
			[
				'@babel/env',
				{
					targets: { node: 'current' },
					useBuiltIns: false,
				},
			],
			[
				'@babel/typescript',
				{
					allExtensions: true,
				},
			],
		],
		plugins: [
			'import-graphql',
			'@babel/plugin-syntax-dynamic-import',
			['@babel/plugin-proposal-decorators', { legacy: true }],
			['@babel/plugin-proposal-class-properties', { loose: true }],
			'@babel/plugin-proposal-object-rest-spread',
			'@babel/plugin-proposal-optional-chaining',
			[
				'module-resolver',
				{
					extensions: ['.ts', '.tsx'],
					root: ['./'],
				},
			],
		],
	};
};
