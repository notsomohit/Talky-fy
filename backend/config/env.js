import { config } from "dotenv";

config({path: `.env`});

export const {
    PORT,
    DB_URI,
    NODE_ENV,
    JWT_SECRET,
    JWT_SECRET_EXPIRY
} = process.env;