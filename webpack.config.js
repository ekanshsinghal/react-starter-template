const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = (_, argv) => {
	const mode = argv.mode;
	const isDevelopment = mode === 'development';
	return {
		devtool: isDevelopment ? 'source-map' : false,
		entry: [path.resolve(__dirname, 'src/index.js')],
		mode: mode,
		output: {
			path: path.join(__dirname, '/build'),
			filename: '[name].bundle.js'
		},
		devServer: {
			historyApiFallback: true,
			hot: true,
			port: 3000
		},
		module: {
			rules: [
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					use: {
						loader: "babel-loader",
						options: {
							plugins: [
								isDevelopment && require('react-refresh/babel')
							].filter(Boolean),
						}
					},
				}, {
					test: /\.(s*)css$/,
					use: [
						{
							loader: MiniCssExtractPlugin.loader,
							options: {publicPath: ''}
						},
						"css-loader",
						"sass-loader",
					]
				}, {
					test: /\.(png|svg|jpg|jpeg|gif|woff|woff2|eot|ttf|otf)$/i,
					type: 'asset',
				}
			]
		},
		optimization: {
			splitChunks: isDevelopment ? false : { chunks: "all" }
		},
		plugins: [
			new CleanWebpackPlugin(),
			new HtmlWebpackPlugin({template: './public/index.html'}),
			new MiniCssExtractPlugin(),
			isDevelopment && new webpack.HotModuleReplacementPlugin(),
			isDevelopment && new ReactRefreshWebpackPlugin(),
			new webpack.ProvidePlugin({
				React: 'react',
			})
		].filter(Boolean)
	}
}