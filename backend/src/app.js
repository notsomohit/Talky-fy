import express from "express";
import cookieParser from "cookie-parser";
import { authRouter } from "../routes/auth.routes.js";
import { arcjetMiddleware } from "../middleware/arcjet.middleware.js";
import messageRouter from "../routes/message.routes.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import cors from "cors";
import { CLIENT_URL } from "../config/env.js";
const app = express();

app.use(express.json()); //req.body
app.use(express.urlencoded({extended:true}));
app.use(cors({origin:CLIENT_URL,credentials:true}));
app.use(cookieParser());

app.use("/api/auth",authRouter);
app.use("/api/message",messageRouter);


export default app;