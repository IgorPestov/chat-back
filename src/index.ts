import createSocket from "./core/socket";
import { createServer } from "http";
const PORT = process.env.PORT || 3000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes/routes");
const cors = require("cors");
const bodyParser = require("body-parser");
const http = createServer(app);
createSocket(http);

require("dotenv").config();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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

app.get("/", (req: any, res: any) => {
  res.sendFile(__dirname + "/index.html");
});
app.use("/", routes, createSocket);
http.listen(PORT, () => {
  console.log(`Server : http://lockalhost:${PORT}`);
});
