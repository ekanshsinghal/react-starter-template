const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, 'src', 'index.js'),
	mode: 'development',
	output: {
		path: path.join(__dirname, '/build'),
		filename: 'bundle.js'
	},
	devServer: {
		inline: true,
		port: 3000
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},
	plugins: [new HtmlWebpackPlugin({template: path.resolve(__dirname, 'public', 'index.html')})]
}