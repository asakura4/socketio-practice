const { Server } = require('socket.io')

module.exports = (io) => {
  io.on('connection', socket => {
    //   console.log(socket)
    console.log('a user connected')
    console.log(io.engine.clientsCount)
    socket.broadcast.emit('systemBroadcast', 'a user connected!!!!!')
    socket.broadcast.emit('systemBroadcast', io.engine.clientsCount + ' clients online.')
    socket.on('disconnect', () => {
      console.log('user disconnected')
      console.log(io.engine.clientsCount)
      socket.broadcast.emit('systemBroadcast', 'a user disconnected!!!!!')
      socket.broadcast.emit('systemBroadcast', io.engine.clientsCount + ' clients online.')
    })
    socket.on('chat message', msg => {
      console.log('message: ' + msg)
      io.emit('chat message', msg)
    })
  })
  return io
}
