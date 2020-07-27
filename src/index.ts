import createSocket from "./core/socket";
import { createServer } from "http";
const PORT = process.env.PORT || 3000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes/routes");
const cors = require("cors");
const bodyParser = require("body-parser");
const server = createServer(app);
const io = require("socket.io")(server);
require("dotenv").config();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
//
createSocket()
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DatabaseChat is connected successfully");
  })
  .catch((err: any) => {
    console.log("Error with connecting to database");
  });

/////////////////////////////////////////
// io.sockets.on("connect", (socket: any) => {
//   socket.emit("connect", { message: "welcome to the chat" });
//   socket.emit("msg", { message: "asdasdads" });
//   socket.on("sendMsg", (data : any)=> {
//     io.sockets.emit('addMsg', {msg: data})
//   console.log("DATA", data);

//   })
// });
// console.log("io",createSocket());

//  io.on('msg', (socket:any)=>{
//    console.log(socket)
//  })
app.use("/", routes );
server.listen(PORT, () => {
  console.log(`Server : http://lockalhost:${PORT}`);
});
