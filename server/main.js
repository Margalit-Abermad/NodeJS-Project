const express = require("express");
const productsRouter = require("./routers/productRouter");
const app = express();
const cors=require('cors');
app.use(cors());
app.use(express.json());
require('./db/mongoConnect');
app.use("/api/products", productsRouter);
app.listen("8001",()=>{
  console.log("connect server")
});
console.log("Hi!!");


