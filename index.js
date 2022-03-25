const express = require("express");
const App = express();
App.use(express.json());
App.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello world",
  });
});
App.post("/add-element", (req, res) => {
  res.status(200).json({ message: "Element Addes Successfully" });
});
