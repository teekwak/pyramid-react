module.exports = {
	entry: "./assets/js/index.js",
	output: {
		filename: "./assets/dist/bundle.js"
	},
	target: 'web',
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			}
		]
	},
	stats: {
		colors: true
	}
}

