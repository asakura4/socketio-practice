const express = require('express')
const app = express()

const http = require('http')
const server = http.createServer(app)
const routes = require('./routes')
const io = require('socket.io')(server)
require('./config/sockets')(io)

app.use((req, res, next) => {
  next()
})
app.use(routes)

// const { Server } = require('socket.io')
// const io = new Server(server)

// io.on('connection', socket => {
// //   console.log(socket)
//   console.log('a user connected')
//   console.log(io.engine.clientsCount)
//   socket.broadcast.emit('systemBroadcast', 'a user connected!!!!!')
//   socket.broadcast.emit('systemBroadcast', io.engine.clientsCount + ' clients online.')
//   socket.on('disconnect', () => {
//     console.log('user disconnected')
//     console.log(io.engine.clientsCount)
//     socket.broadcast.emit('systemBroadcast', 'a user disconnected!!!!!')
//     socket.broadcast.emit('systemBroadcast', io.engine.clientsCount + ' clients online.')
//   })
//   socket.on('chat message', msg => {
//     console.log('message: ' + msg)
//     io.emit('chat message', msg)
//   })
// })

server.listen(3000, () => {
  console.log('listening on *:3000')
})
