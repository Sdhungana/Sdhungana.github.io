const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
  res.send(
    '<form action="/result" method="post"> <label>Name <input type="text"  name="name"></label><label>Age <input type="number"  name="age"></label> <input type="submit" value="Submit Query"></form>'
  );
});

app.post("/result", (req, res, next) => {
  let { name, age } = req.body;
  res.send(`Welcome ${name},  Age: ${age}`);
});

app.listen(3000);
