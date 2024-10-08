import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { buildLoaders } from './buildLoaders';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
	const { isDev, mode, paths } = options;

	return {
		mode,
		entry: paths.entry,
		devtool: isDev ? 'inline-source-map' : undefined,
		output: {
			path: paths.build,
			filename: '[name].[contenthash].js',
			clean: true,
		},
		module: {
			rules: buildLoaders(options),
		},
		resolve: buildResolvers(),
		plugins: buildPlugins(paths),
		devServer: isDev ? buildDevServer(options) : undefined,
	};
}
