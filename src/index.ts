const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require ( './routes/routes')
const cors = require('cors');
const bodyParser = require('body-parser')
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
  .catch((err : any) => {
    console.log("Error with connecting to database");
  });

app.use("/", routes);
app.listen(3000, () => {
  console.log("Listen port on port 3000");
});
