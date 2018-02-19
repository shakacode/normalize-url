const path = require(`path`);

module.exports = {
	context: __dirname,
	entry: "./index.js",
	devtool: false,
	output: {
		path: __dirname,
		filename: "index.es5.js"
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
