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
    console.log(req.body.data);
    if(req.body.data){
        arra.push(req.body.data);
    }
})

app.post("/data", (req, res) => {
    res.status(200);
    var arr = [];
    // console.log(req.body.data.length)
    // console.log(arra.length);
    if (arra.length){
        arra.map((a, i) =>{
            if(i>=req.body.data.length){
                if(a.ppl!=req.body.data.ppl){
                    arr.push(a);
                }
            }
        })
    }
    res.send(arr);
    res.end();
})

app.listen(43210, ()=>{
    console.log("Connected At 43210");
})