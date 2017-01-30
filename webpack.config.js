var path = require('path');
var webpack = require('webpack');

//console.log(path.join(__dirname, 'dist/'));

module.exports = {
	resolve: {
    	extensions: ['', '.js', '.jsx']
  	},
	entry: './app/index.js',
	output: {
		path:path.join(__dirname, 'dist'),
		filename:'bundle.js',
		publicPath:'/app/assets/'
	},
	module: {
		loaders: [
			{
				test: /.jsx?$/, /*/(\.js|.jsx)$/*/
				loader: 'babel-loader',
				include: path.join(__dirname, 'app'),
				exclude: /(node_modules|bower_components)/,
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	}
};