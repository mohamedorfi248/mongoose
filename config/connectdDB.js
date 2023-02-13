// 1 declaration mongoose
const mongoose = require("mongoose");

// 2 fonction connect DB
const connectDB = async () => {
    try {
        mongoose.set("strictQuery",false);
        await mongoose.connect(process.env.DB_URI, {useNewUrlParser: true});
        console.log("Database connected");
    } catch (error) {
        console.log("can not connect to Database",error);
    }
};


// 3 exportation 
module.exports = connectDB ;