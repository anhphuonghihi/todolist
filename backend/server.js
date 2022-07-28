const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
const cors = require("cors");
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", (req, res) => {
  res.send("hello from simple server :)");
});

app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
const todo = require("./routers/todo");
app.use("/todo", todo);

const colors = require("colors");
const mongoose = require("mongoose");
mongoose
  .connect(process.env.URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => console.log("> Connected...".bgCyan))
  .catch((err) =>
    console.log(
      `> Error while connecting to mongoDB : ${err.message}`.underline.red
    )
  );
