const express = require("express");
require("./db/conn");
const Student= require("./models/student")
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: true }));


app.post("/students", (req,res)=>{

    console.log(req.body);
    const user = new Student(req.body);
    user.save()
    .then(()=>{
        res.send(user);
    })
    .catch((err)=>{
        res.send(err)
    })

})

app.listen(port,()=>{
    console.log(`Successfully Connected at port ${port}`);
})