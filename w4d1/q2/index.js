const express = require("express");
const path = require("path");
const session = require("express-session");
const app = express();

// middleware
app.use(express.urlencoded({ extended: true }));

//serving public file
app.use("/css", express.static(path.join(__dirname, "css")));

//session middleware
const oneDay = 1000 * 60 * 60 * 24;
app.use(session({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: true 
}));


//template engine
app.set("view engine", "ejs");
app.set("views", "public/view");

const getHour = () => {
  const date = new Date();
  return date.getHours();
};


//routes
app.get("/", (req, res) => {
    let css = (getHour() > 6 && getHour() < 18)?"day.css":"night.css";
    res.render("index", {css})
});
app.post("/result", (req, res) => {
    let {name, age} = req.body;
    req.session.name = name;
    req.session.age= age;
    res.redirect(303,"/output");
});

app.get("/output", (req, res) => {
   res.send(`Welcome, ${req.session.name} .Your age is ${req.session.age}`);
});

app.listen(3000, () => {
  console.log(`Server is running at port 3000`);
});
