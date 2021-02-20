const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devtool: 'source-map',
	entry: [path.resolve(__dirname, 'src/index.js')],
	mode: 'development',
	output: {
		path: path.join(__dirname, '/dist'),
		filename: '[name].bundle.js'
	},
	devServer: {
		inline: true,
		port: 3000,
		hotOnly: true
	},
	module: {
		rules: [
			{
				// config for loading .js and .jsx files
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
                    loader: "babel-loader",
                    options: {presets: ["@babel/env"]}
                },
			}, {
				// config for loading sass and scss files
				test: /\.(s*)css$/,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader",
				]
			}, {
				// config for loading css files
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			}, {
				// config for loading image files
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