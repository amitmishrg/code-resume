const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: "development",
	entry: "./src/app.js",
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build')
	},
	devtool: "inline-source-map",
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: "babel-loader"
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: "eslint-loader"
			}
		]
	},
	optimization: {},
	plugins: [
		new HtmlWebpackPlugin({
			filename: path.resolve(__dirname, 'build/index.html'),
			template: path.resolve(__dirname, 'src/index.html')
		}),
		new webpack.HotModuleReplacementPlugin()
	]
}