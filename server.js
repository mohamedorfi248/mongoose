const express=require("express");

//2 creation d instance 
const app = express();

//5 declaration dotenv
require("dotenv").config();

//8 Middelware bodyparser
app.use(express.json());


//6 connect mongoDB
const connectDB=require("./config/connectdDB")
connectDB();

// 7 require routes
app.use("/api/contact",require('./routes/contact'))

//3 creation du port 
const PORT= process.env.PORT; 



//4 creation du serveur
app.listen(PORT,error => {
    error? console.error(`server failed to run !!! ${error}`):
    console.log(`server is runnig on port ${PORT}`);
});

