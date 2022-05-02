const express=require("express");
const app=express();
const bodyParser=require("body-parser");
const https=require("https");
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("css"));
const date=require(__dirname+"/date.js")
let tasks=[];
app.get("/",(req,res)=>{
    let day=date();
    res.render("list",{kindOfDay:day,
    newTasks:tasks});
});
app.post("/",(req,res)=>{
    tasks.push(req.body.task);
    res.redirect("/");
})
app.get("/about",(req,res)=>{
    res.render("about")
})
app.listen(process.env.PORT || 5500,()=>
{
    console.log("listening on port 5500");
});