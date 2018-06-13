const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

var cor = require('cors');
app.use(cors());
app.use(bodyParser.json())

var arra = [];

app.post("/", (req, res)=>{
    res.status(200);
    res.send("OK")
    if(req.body.data){
        arra.push(req.body.data);
    }
})

app.post("/data", (req, res) => {
    res.status(200);
    var a = arra.length;
    console.log(req.body.data.length, " ", req.body.data)
    console.log(arra.length);
    res.send();
    res.end();
})

app.listen(43210, ()=>{
    console.log("Connected At 43210");
})