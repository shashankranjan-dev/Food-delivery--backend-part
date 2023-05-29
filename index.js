const express = require("express");
const router = express.Router();
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

const userRoute = require("./router/userRoute");
const recommended = require("./router/recommended");
const categories = require("./router/categories");

app.use(cors());
app.use("/", router);
const port = process.env.PORT || 5000;

const uri =
  "mongodb+srv://ranjanshashank:BbZEhOw60aaYjbhZ@cluster0.fahzmq5.mongodb.net/";

// //Connect to DB command
mongoose.connect(uri, { useNewUrlParser: true }, () =>
  console.log("Connected to DB")
);

app.use(express.json());

app.use("/api/user", userRoute);
app.use("/api/recommendeds", recommended);
app.use("/api/categories", categories);

app.listen(port, () => {
  console.log(`welcome to the tech world at PORT: ${port}`);
});
