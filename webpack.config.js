const path = require('path')

module.exports = {
	entry: './index.js',
	output: {
		path: path.join(__dirname),
		filename: 'index_bundle.js'
	},
	mode: 'production',
	module: {
	rules: [{
		test: /\.js$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader'
		}
		}]
	},
	devtool: 'source-map',
	mode: 'development',
	loaders: [{
      test: /.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      loader: "style-loader!css-loader"
    }, {
      test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
      loader: 'url-loader?limit=100000' }]
}
