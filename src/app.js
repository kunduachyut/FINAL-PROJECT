const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");

require("./db/conn");
const register = require("./models/registers");
const async = require("hbs/lib/async");
const port = process.env.port || 3000;

const static_path = path.join(__dirname,"../public");
const templates_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname,"../templates/partials");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path))
app.set("view engine","hbs");
app.set("views",templates_path);
hbs.registerPartials (partials_path);

app.get("/",(req,res) => {
    res.render("index")
});

app.get("/register",(req,res)=>{
    res.render("register");
})


app.post("/register",async (req,res)=>{
    try{
        console.log(req.body.firtname);
        res.send(req.body.firtname);
    }catch(error){
        res.status(400).send(error);
    }
})

app.get("/login",(req,res)=>{
    res.render("login");
})

app.listen(port,() => {
    console.log("Server is running");
});