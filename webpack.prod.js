const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: [path.resolve(__dirname, 'src/index.js')],
    mode: 'production',
	output: {
		path: path.join(__dirname, '/build'),
		filename: '[name].bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
                    loader: "babel-loader",
                    options: {presets: ["@babel/env"]}
                },
			}, {
				test: /\.(s*)css$/,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader",
				]
			}, {
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			}, {
				test: /\.(png|svg|jpg|jpeg|gif|woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({template: './public/index.html'}),
		new webpack.ProvidePlugin({
			process: 'process/browser'
		})
	]
}