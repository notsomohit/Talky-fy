import mongoose from "mongoose";
import { DB_URI } from "../config/env.js";

if(!DB_URI){
    throw new Error("please define a valid DB_URI in env.js");
}

export const connectDB = async()=>{
    try {
        await mongoose.connect(DB_URI);
        console.log(`you're succesfully connected to MongoDB`);
    } catch (error) {
        console.error("error connecting to database",error);
        process.exit(1);
    }
}