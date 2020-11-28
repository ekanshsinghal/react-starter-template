const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
    mode: 'production',
	output: {
		path: path.join(__dirname, '/dist'),
		filename: '[name].bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}, {
				test: /\.s[ac]ss$/i,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader",
				]
			}, {
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			}
		]
	},
	plugins: [new HtmlWebpackPlugin({template: './public/index.html'})]
}