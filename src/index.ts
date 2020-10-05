const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require('./routes/routes')
const cors = require('cors');
const bodyParser = require('body-parser')
const {createServer} = require('http')
const createSocket = require('socket.io')
require("dotenv").config();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("DatabaseChat is connected successfully");
  })
  .catch((err: any) => {
    console.log("Error with connecting to database");
  });
app.use("/", routes);
const server = createServer(app)
const io = createSocket(server)
io.on('connect',  (socket: any) =>{

  socket.on('DIALOGS:JOIN', (dailogId: string) => {
    socket.dailogId = dailogId;
    socket.join(dailogId);
  });
  socket.on('DIALOGS:TYPING', (obj: any) => {
    socket.broadcast.emit('DIALOGS:TYPING', obj);
  });
});

server.listen(3000, () => {
  console.log("Listen port on port 3000");
});
