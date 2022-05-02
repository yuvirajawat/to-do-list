const express=require("express");
const app=express();
const bodyParser=require("body-parser");
const https=require("https");
app.listen(process.env.PORT || 5500,()=>
{
    console.log("listening on port 5500");
});