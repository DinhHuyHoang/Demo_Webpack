const express = require("express")
const server = express()
const createApp = require("./dist/server-bundle")
const app = createApp.default()
const { readFileSync } = require("fs")
const renderer = require("vue-server-renderer").createRenderer({
	template: readFileSync("./index.template.html", "utf-8")
})

server.use('/dist', express.static("dist"))
server.use('/public', express.static("public"))

server.get("*", (req, res) => {
	renderer
		.renderToString(app)
		.then(html => {
			res.end(html)
		})
		.catch(err => {
			if (err) res.status(500).end("Internal Server Error")
			return
		})
})

server.listen(8080)

console.log('server listening on port 8080')