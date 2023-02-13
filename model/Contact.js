// 1 require mongoose
const mongoose = require("mongoose");


//2 create shema
const schema = mongoose.Schema

const contactSchema=new schema({
    name:{ type:String , required: true},
    email:{ type:String , required: true},
    phone:{ type:Number},
});


module.exports= Contact = mongoose.model('contact',contactSchema);

