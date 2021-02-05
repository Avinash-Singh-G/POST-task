var express = require('express');
var bodyParser = require('body-parser');
var app=express();
app.use(bodyParser.json());

app.get('/', (req,res) => {
    return res.sendFile(__dirname+'/indPOST.js');
})

app.post("/square-by-post-json", (req,res) => {
    const n = parseInt(req.body.num);
    var sq=n*n;
    var s= sq.toString();
    res.send(s);
})

app.listen(3000, () => {
    console.log("Server is running");
})