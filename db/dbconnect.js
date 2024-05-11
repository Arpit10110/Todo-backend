import mongoose from "mongoose";
export const dbconnect=()=>{
    mongoose.connect(process.env.Mongo_URL,({dbName:"todobackend"})).then(()=>{
        console.log("Db is connected");
    }).catch((e)=>{
        console.log(e);
    })
}