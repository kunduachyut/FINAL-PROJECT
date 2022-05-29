const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/krishnanagar",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    ueCreateIndex:true

}).then(() => {
    console.log("Connected...");
}).catch((e) => {
    console.log("Not Connected...")
})