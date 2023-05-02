const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://0.0.0.0:27017/Students-api", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() =>{
    console.log("Connection is Successful !")
}).catch((e)=>{
    console.log("Connection Unsuccessful");
})