const path = require(`path`);

module.exports = {
	context: __dirname,
	entry: "./index.js",
	devtool: false,
	output: {
		path: __dirname,
		filename: "index.es5.js",
		library: "normalizeUrl",
		libraryTarget: "umd"
	},
	resolve: {
		extensions: [".js"]
	},
	stats: {
		colors: true,
		reasons: true,
		chunks: true
	},
	module: {
		rules: [
			{
				test: /\.js/,
				loader: "babel-loader"
			}
		]
	}
};
