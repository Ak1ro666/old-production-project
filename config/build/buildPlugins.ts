import HtmlWebpackPlugin from 'html-webpack-plugin';
import { BuildPaths } from './types/config';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildPlugins(paths: BuildPaths): webpack.WebpackPluginInstance[] {
	return [
		new HtmlWebpackPlugin({ template: paths.html }),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: 'css/[name].[contenthash:8].css',
		}),
	];
}
