const express = require("express")
const path = require("path")

const server = express()
const port = 9000

server.listen(port, (req, res) =>
{

})

server.use(express.static(path.join(__dirname, "public")))