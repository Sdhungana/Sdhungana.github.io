const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"public/view"))


app.get('/', (req,res) => {
        res.render("cookietable", {
            cookies: req.cookies,
            pageTitle: "Cookie Form"
        });
     
    } );


app.post("/", (req,res) => {
    if(req.body.key && req.body.value) {
        res.cookie(req.body.key, req.body.value);
    }
    res.redirect(303,"/");
})

app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
})