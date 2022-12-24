require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes.js");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/user", userRoutes);
app.use("/posts", postRoutes);

mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Listening on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("Unable to connect to db");
  });
