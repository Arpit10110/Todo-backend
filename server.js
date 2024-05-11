import { app } from "./app.js";
import {dbconnect } from "./db/dbconnect.js";
dbconnect();
app.listen(process.env.PORT,()=>{
    console.log("Server is Working");
})