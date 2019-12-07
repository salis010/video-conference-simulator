const express = require('express')
const http = require('http')
const socket = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socket.listen(server)

app.use(express.static(__dirname))

const port = process.env.port || 3000

server.listen(port, () =>
	console.log(`Listening on port ${port}...`)
)

//Socketing
io.on('connection', function(socket){
    console.log("A new user connected")

    socket.emit('message', {'message': 'hello worldddddddddd'})

    socket.on('message', function(data) {
        console.log("A message was received from client")
    })
})
