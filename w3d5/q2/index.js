const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send(
    `<form method="POST" action="/result">
        <label> Name</label>
        <input type="text" name="name"/>
        <label> Age</label>
        <input type="number" name="age"/>
        <input type="submit" id="submit" value="Submit Query"/>
    </form>`
  );
});
app.post("/result", (req, res) => {
  let { name, age } = req.body;
  res.send(`Name: ${name} and Age is ${age}`);
});

app.listen(3000, () => {
  console.log(`Server is running at port 3000`);
});
