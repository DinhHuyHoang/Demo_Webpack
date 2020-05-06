const base = require('./webpack.base.config')
const merge = require('webpack-merge')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')

module.exports = merge(base, {
	entry: "./src/entry-client.js",
	output: {
		filename: "client-bundle.js",
	},
	plugins: [
		// new VueSSRClientPlugin()
	]
})