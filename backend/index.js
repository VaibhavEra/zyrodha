require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3002;
const mongo_url = process.env.MONGO_URL;

app.listen(PORT, () => {
  console.log(`App started, and listening on PORT ${PORT}`);
  mongoose.connect(mongo_url);
  console.log("DB Connected!");
});
