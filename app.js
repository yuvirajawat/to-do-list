const express=require("express");
const app=express();
const bodyParser=require("body-parser");
const https=require("https");
app.set("view engine","ejs");
app.get("/",(req,res)=>{
    var today=new Date();
    var currentDay=today.getDay();
    var day="";
    switch (currentDay) {
        case 0:
            day="sunday";
            break;
        case 1:
            day="monday";
            break;
        case 2:
            day="tuesday";
            break;
        case 4:
            day="wednesday";
            break;
        case 5:
            day="thursday";
            break;
        case 6:
            day="friday";
            break;
    
        default:
            break;
    }
    res.render("list",{kindOfDay:day});
});
app.listen(process.env.PORT || 5500,()=>
{
    console.log("listening on port 5500");
});