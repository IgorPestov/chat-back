import socket from 'socket.io';
import {createServer} from 'http'
import express from"express";

export default () => {
    const app = express();
const server = createServer(app)
    const io = socket(server)
    io.on('connect', (socket : any) => {
        console.log('work')
        socket.emit('msg', 'hello')
    })
    return io
}