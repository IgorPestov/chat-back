import express from 'express';
import socket from 'socket.io'

import {DialogModel , MessageModel} from '../models'
import {IMessage} from '../interface/IMessage'

// class MessageController {
//     io: socket.Server;
//     constructor(io:socket.Server) {
//         this.io= io
//     }
// }