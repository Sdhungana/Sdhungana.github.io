const express = require("express");
const path = require("path");
const app = express();
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));

app.get("/", (req, res) => {
    res.render("index", {
        title: 'Form Page'
    })
});
app.post("/result", (req, res) => {
  let { name, age } = req.body;
  res.redirect(303, `/output/?name=${name}&age=${age}`);
  
});

app.get("/output", (req,res) => {
    let { name, age } = req.query;
    res.render("result", {
        name, age, title: "Result Page"
    })
})

app.listen(3000, () => {
  console.log(`Server is running at port 3000`);
});
