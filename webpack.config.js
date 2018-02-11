var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		app: './src/index.js'
	},
	output: {
		path: path.join(__dirname, 'dist'),
		publicPath: '/',
		filename: '[name].bundle.js'
	},
	devServer: {
		port: 8888,
		historyApiFallback: true
	},
	module: {
		rules: []
	},
	plugins: [
		new HtmlWebpackPlugin()
	]
};