const path = require("path")
const VueLoaderPlugin = require("vue-loader/lib/plugin")
const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin")

module.exports = {
	devtool: "cheap-module-source-map",
	mode: "development",
	output: {
		path: path.resolve(__dirname, "../dist"),
		publicPath: "/dist/"
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader?sourceMap"]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: ["file-loader?sourceMap"]
			},
			{
				test: /\.vue$/,
				use: "vue-loader"
			},
			{
				test: /\.m?js$/,
				exclude: file =>
					/node_modules/.test(file) && !/\.vue\.js/.test(file),
				use: ["babel-loader"]
			}
		]
	},
	plugins: [new VueLoaderPlugin(), new FriendlyErrorsPlugin()]
}
