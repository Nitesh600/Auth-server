const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");

const PORT =  3001;
// const dbUrl = process.env.MONGO_URL;

main().then(()=>{
    console.log("connected to Db");
 }).catch((err)=>{
    console.log(err);
 });
 async function main() {
    await mongoose.connect("mongodb+srv://Nitesh:NiteshKumar@zerodhacluster.344ht.mongodb.net/Auth?retryWrites=true&w=majority&appName=ZerodhaCluster");
  
}

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
app.use(
  cors({
    origin: ["https://auth-client-nine.vercel.app/signup"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser());

app.use(express.json());

app.use("/", authRoute);
