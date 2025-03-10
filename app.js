import express from "express";
import {config} from "dotenv";
import cookieparser from "cookie-parser";
import cors from cors;
export const app = express(); 
config({path:"./config.env"}) ;


app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET","POST","PUT","DELETE"],
    Credentials: true,
})) //for using middleware


app.use(cookieparser()); // middle ware
app.use(express.json()); //used for data parsing (middleware)
app.use(express.urlencoded({extended: true })); //help us to understand which type of data is coming from frontend to backend

