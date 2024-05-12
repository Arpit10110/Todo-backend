import express from "express";
import router from "./routes/route.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors"
config({
    path:"./db/config.env"
})
export const app = express();
app.use(express.json());
app.use(cors({
    origin: [process.env.Fronted_URL],
    methods: ['GET', 'POST','PUT', 'DELETE'],
    credentials: true
}))
app.use(cookieParser());
app.use(router);
