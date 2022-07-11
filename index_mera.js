const express=require("express");
const bodyParser=require("body-parser");
const app=express();
const path=require("path"); //used for absolute path
var port=4000;
app.use(bodyParser.urlencoded({extended:false}));
// ye localhost 4000 pe hello gaurav likha huaa dikha dega
app.get("/",(req,res)=>
{
    // res.send("<h1>hello gaurav</h1>");
    // res.sendFile("./abc.html"); // it will give error of path so we use differnet method
    // console.log(path.join(__dirname + "/abc.html"));
    res.sendFile(path.join(__dirname + "/abc.html"));
});

//if we  write localhost:4000/about the show about section
// app.get("/about",(req,res)=>
// {
//     res.send("<h1>about gaurav</h1>");
// });

// app.get("/contact",(req,res)=>
// {
//     res.send("<h1>contact gaurav</h1>");
// });

// port number ko fetch ker rha hai or us port number pe chize dikha rha hai
// server create ho gya hai port number 4000 pe
app.listen(port,()=>{
    console.log(`server is working on port: ${port}`);

});

app.post("/api/v1/login",(req,res)=>
{
    res.send("<h1>DONE</h1>");
})