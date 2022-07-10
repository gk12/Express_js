const express=require("express");
const app=express();
var port=4000;
// ye localhost 4000 pe hello gaurav likha huaa dikha dega
app.get("/",(req,res)=>
{
    res.send("<h1>hello gaurav</h1>");
});

//if we  write localhost:4000/about the show about section
app.get("/about",(req,res)=>
{
    res.send("<h1>about gaurav</h1>");
});

app.get("/contact",(req,res)=>
{
    res.send("<h1>contact gaurav</h1>");
});

//port number ko fetch ker rha hai or us port number pe chize dikha rha hai
//server create ho gya hai port number 4000 pe
app.listen(port,()=>{
    console.log(`server is working on port: ${port}`);

});