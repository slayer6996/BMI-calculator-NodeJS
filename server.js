const express=require('express');
const bodyParser=require('body-parser');

const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.get('/style.css', function(req, res) {
    res.sendFile(__dirname + "/" + "style.css");
});

app.post('/',function(req,res){
    console.log(req.body.height);

    var height=Number(req.body.height);
    var weight=Number(req.body.weight);
    var bmi= weight/(height*height);
    bmi=bmi.toPrecision(4);
    if(bmi<18.5)
        res.send("You are underweight, your BMI is "+ bmi);
    else if(bmi < 24.9)
        res.send("You are healthy, your BMI is " + bmi);
    else
        res.send("You are overweight, your BMI is "+ bmi);
}); 

app.listen(3000, function(){
    console.log("listening to port 3000");
});