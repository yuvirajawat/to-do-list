const express=require("express");
const app=express();
const bodyParser=require("body-parser");
const https=require("https");
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("css"));
let tasks=[];
app.get("/",(req,res)=>{
    let today=new Date();
    let options={
        weekday:"long",
        day:"numeric",
        month:"long"
    };
    let day=today.toLocaleDateString("en-us",options);

    res.render("list",{kindOfDay:day,
    newTasks:tasks});
});
app.post("/",(req,res)=>{
    tasks.push(req.body.task);
    res.redirect("/");
})
app.listen(process.env.PORT || 5500,()=>
{
    console.log("listening on port 5500");
});