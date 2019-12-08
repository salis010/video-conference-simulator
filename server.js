const express = require('express')
const http = require('http')
const socket = require('socket.io')
const createTables = require('./server/create-tables')
const manageSocketing = require('./server/manage-socketing')
const mockActivity = require('./server/mockActivity')

const app = express()
const server = http.createServer(app)
const io = socket.listen(server)

const tables = createTables(15)

app.use(express.static(__dirname))

const port = process.env.port || 3000

server.listen(port, () =>
	console.log(`Listening on port ${port}...`)
)

//Socketing
io.on('connection', socket => {
	console.log("A new user connected")
  manageSocketing(socket, tables)
	mockActivity(socket, tables)
})
