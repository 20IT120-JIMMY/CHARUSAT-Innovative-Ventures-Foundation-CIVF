import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import authRoute from "./routes/auth.js";
import cookieParser from "cookie-parser";

// const express = require("express"); instead of using this structure we directly pass "type":"module" in package.json
const app = express();

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB !!!🥳🥳🥳");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("Disconnected from MongoDB !!!😢😢😢");
});

//Middlewares
app.use(cookieParser());
app.use((req, res, next) => {
  console.log("Hello Middleware... 🤣🤣🤣");
  next();
});

//app.use(express.json) //without that we cant post on below links we provide
//or
app.use(bodyParser.urlencoded({ extended: false })); //body parser responsible for parsing the incoming request before handle the it
app.use(bodyParser.json());

app.use("/api/auth", authRoute);


app.use((error, req, res, next) => {
  console.log(
    "Getting Error --- If Get Any Error At Running of Above Four Routes Then It Will Show..."
  );
  const errorStatus = error.status || 500;
  const errorMessage = error.message || "Something Went Wrong";
  return res.status(500).json({
    success: false,
    status: errorStatus,
    Message: errorMessage,
    stack: error.stack,
  });
});

app.listen(5000, () => {
  connect();
  console.log("Listening on port 5000!!!🥳🥳🥳");
});
