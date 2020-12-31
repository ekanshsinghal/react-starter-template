const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: ["@babel/polyfill", path.resolve(__dirname, 'src/index.js')],
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
			}, {
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			}, {
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
			}
		]
	},
	plugins: [new HtmlWebpackPlugin({template: './public/index.html'})]
}