import socket from 'socket.io';
import http from 'http'

export default (http : http.Server) => {
    const io = socket(http)

    io.on('connection', (socket : any) => {
        socket.emit('msg', 'hello')
    })
    return io
}