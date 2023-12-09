// const express = require('express');
import dotenv from "dotenv";
import express from "express";

import { ConnectToDatabase } from "./helpers/db-helper.js";
import bodyParser from "body-parser";
import { rate_book_handler } from "./controllers/rate-book.js";
dotenv.config();

const app = express();

// for CORS error
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Headers", true);
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Autorization"
    );
  
    if (req.method === "OPTIONS") {
      // res.header("Access-Control-Allow-Methods", "PUT,POST,PATCH,DELETE,GET");
  
      res.header("Access-Control-Allow-Origin", "*");
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
      );
      res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS"
      );
      res.header("Access-Control-Allow-Credentials", true);
  
      return res.status(200).json({});
    }
  
    next();
  });

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
await ConnectToDatabase();

app.get("/", (req, res) => {
    res.json({ hello: "world" });
});
app.post("/rate-book", rate_book_handler);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
