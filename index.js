const express=require("express");
const get=require("./controllers/c");
const cors=require("cors")

const app=express();

app.use(express.json());
app.use(cors())
app.use("/audio/:size",get);
app.listen(4000,()=>console.log("Server started..."))