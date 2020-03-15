const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

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
		}),
		new WorkboxPlugin.GenerateSW({
	       clientsClaim: true,
	       skipWaiting: true,
	    }),
		new WebpackPwaManifest({
            filename: 'manifest.webmanifest',
            name: 'CodeResume',
            orientation: "portrait",
            display: "standalone",
            start_url: ".",
            short_name: 'CodeResume',
            description: 'CodeResume || Portfolio!',
            theme_color: "#241b2f",
            background_color: "#262335",
            crossorigin: 'use-credentials', //can be null, use-credentials or anonymous
            fingerprints: true,
            icons: [
                {
                    src: path.resolve('assets/icons/icon.png'),
                    size: [96, 128, 192, 256, 384, 512] // multiple sizes
                }
            ]
        })
	]
}