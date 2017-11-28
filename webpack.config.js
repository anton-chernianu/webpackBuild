const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
	source: path.join(__dirname, 'src'),
	build: path.join(__dirname, 'dist')
};

module.exports = {
	entry: PATHS.source + '/js/index.js',
	output: {
		path: PATHS.build,
		filename: '[name].js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "webpack"
		})
	]
};