const express = require("express")
const path = require("path")

const server = express()
const port = 9000

server.listen(port, (req, res) =>
{
    console.log(`http://localhost:${port}`)
})

server.use(express.static(path.join(__dirname, "public")))