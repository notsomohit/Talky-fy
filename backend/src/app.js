import express from "express";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json()); //req.body
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());


export default app;