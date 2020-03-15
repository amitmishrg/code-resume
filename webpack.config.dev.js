const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: "development",
	entry: "./src/index.js",
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build'),
		publicPath: '/'
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
			},
			{
				test: /\.svg$/,
				use: [
					{
						loader: "babel-loader"
					},
					{
						loader: "react-svg-loader",
						options: {
							jsx: true // true outputs JSX tags
						}
					}
				]
			}
		]
	},
	devServer: {
    	historyApiFallback: true,
  	},
	resolve: {
		alias: {
			Cmpts: path.resolve(__dirname, 'src/components/'),
			Styles: path.resolve(__dirname, 'src/styles/'),
			Assets: path.resolve(__dirname, 'assets/')
		}
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