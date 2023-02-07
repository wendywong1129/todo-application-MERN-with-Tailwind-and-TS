const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./routes/todoItem-routes");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", routes);

const uri = process.env.ATLAS_URI;
const port = process.env.PORT || 5030;

mongoose
  .connect(uri)
  .then(() => {
    console.log("Database is connected");
    app.listen(port, () => {
      console.log(`Server is running at port:${port}`);
    });
  })
  .catch((err) => console.log(err));
