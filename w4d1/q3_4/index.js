const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();

const product = require('./router/router'); 

app.use("/css", express.static(path.join(__dirname, "css")));
app.use(express.urlencoded({extended: true}));

// session middleware
const oneDay = 1000 * 60 * 60 * 24;
app.use(session({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: true 
}));

// create session object 
app.use((req,res,next) => {
    if(!req.session.cart) {
        req.session.cart = [];
    }
    next();
})

// template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));

 // set router
app.use(product);

app.listen(3000, () => {
    console.log(`Server is running on 3000`);
})





