import app from "./app.js";
import { PORT,NODE_ENV } from "../config/env.js";
import { connectDB } from "../db/db.js";

connectDB()
    .then(()=>{
            app.listen(PORT,()=>{
            console.log(`you're listening to http://localhost:${PORT} on ${NODE_ENV}`);
        });
    })
    .catch((err)=>{
        console.error("mongoDB connection error");
        process.exit(1);
    })