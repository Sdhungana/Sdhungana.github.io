const express = require("express");
const path = require("path");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.use("/css", express.static(path.join(__dirname, "css")));

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
app.post("/result", (req, res, next) => {
  let { name, age } = req.body;
  res.send(`Welcome ${name},  Age: ${age}`);
});
app.listen(3000);
