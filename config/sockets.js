const { Server } = require('socket.io')

module.exports = io => {
  io.on('connection', socket => {
    //   console.log(socket)
    console.log(`user connected, ${io.engine.clientsCount} clients online.`)
    setTimeout(function () {
    //   socket.broadcast.emit('systemBroadcast', `a user connected! ${io.engine.clientsCount} clients online.`)
      io.emit('user', `a user connected! ${io.engine.clientsCount} clients online.`)
    }, 100)

    socket.on('disconnect', () => {
      console.log(`user disconnected, ${io.engine.clientsCount} clients online.`)
      //   socket.broadcast.emit('systemBroadcast', `a user disconnected! ${io.engine.clientsCount} clients online.`)
      io.emit('user', `a user disconnected! ${io.engine.clientsCount} clients online.`)
    })
    socket.on('chat message', msg => {
      console.log(socket.request)
      console.log('message: ' + msg)
      io.emit('chat message', msg)
    })
  })
  return io
}
