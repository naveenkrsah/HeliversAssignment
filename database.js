const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

// MongoDB connection URL
const mongoUrl = process.env.REACT_APP_MONGODB_URL;
// const mongoURL = `${mongoUrl}/heliverse`;
// const mongoURL = "mongodb://127.0.0.1:27017/heliverse";
const mongoURL = "mongodb+srv://coderdost:h9z77jIi5CDeT8Ne@cluster0.sld6bhl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

// MongoDB connection options
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // Other options if needed
};

// Connecting to MongoDB
const connectToMongoose = () => {
  mongoose
    .connect(mongoURL, options)
    .then(() => {
      console.log("MongoDB connected"),
        {
          dbname: "heliverse",
        };
    })
    .catch((err) => {
      console.error("MongoDB connection error:", err);
    });
};

module.exports = connectToMongoose;
