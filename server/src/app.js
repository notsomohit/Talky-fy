import express from "express";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.routes.js";
import messageRouter from "./routes/message.routes.js";
const app = express();

app.use("/api/auth",authRouter);
app.use("/api/message",messageRouter);

export default app;