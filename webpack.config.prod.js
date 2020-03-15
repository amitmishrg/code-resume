const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
	mode: "production",
	entry: "./src/index.js",
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build'),
		publicPath: '/'
	},
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
	resolve: {
		alias: {
			Cmpts: path.resolve(__dirname, 'src/components/'),
			Styles: path.resolve(__dirname, 'src/styles/'),
			Assets: path.resolve(__dirname, 'assets/')
		}
	},
	optimization: {
		minimizer: [
			new TerserPlugin({
				cache: true,
				parallel: true
			})
		],
		splitChunks: {
			chunks: 'async',
			minSize: 30000,
			maxSize: 0,
			minChunks: 1,
			maxAsyncRequests: 5,
			maxInitialRequests: 3,
			automaticNameDelimiter: '~',
			name: true,
			cacheGroups: {
				vendors: {
					test: /[\/]node_modules[\/]/,
					priority: -10
				},
				default: {
					minChunks: 2,
					priority: -20,
					reuseExistingChunk: true
				}
			}
		}
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: path.resolve(__dirname, 'build/index.html'),
			template: path.resolve(__dirname, 'src/index.html')
		})
	]
}