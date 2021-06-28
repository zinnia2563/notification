const express = require('express');
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./Config/Db");
const transactionRoutes = require("./Router/TransactionRoutes")
dotenv.config();
connectDB()
app.use(express.json());
app.use(cors());

// app.get("/",(req,res) =>{
//     res.send("ok");
// })
app.use("/transaction",transactionRoutes);

const port = process.env.PORT;
app.listen(port, ()=>{
    console.log(`app is runnig on ${port}`);
    
})