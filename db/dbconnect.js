import mongoose from "mongoose";
export const dbconnect=()=>{
    mongoose.connect("mongodb://127.0.0.1:27017",({dbName:"todobackend"})).then(()=>{
        console.log("Db is connected");
    }).catch((e)=>{
        console.log(e);
    })
}