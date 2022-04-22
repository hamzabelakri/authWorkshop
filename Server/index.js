const express = require("express");
const app = express();
const connect = require("./config/ConnectDb");
const authRoute=require('./Routes/authRoute')
require("dotenv").config({ path: "./config/.env" });
const cors=require('cors');
//connection between two ressorce
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});
//run the server
app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
//connect to database
connect();
//midelware global
app.use(express.json());
app.use('/auth',authRoute)
