var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.get('/square-by-post', (req,res) =>{
    res.sendFile(__dirname+'/index.html');
})

router.post('/square-by-post', function(req,res){
    var n = req.body.num;
    console.log(n)
    var sq= parseInt(n)*parseInt(n);
    res.end(" Square of the number= " + sq);
})

app.use("/", router);

app.listen(3000, function() {
    console.log("Server is running");
})