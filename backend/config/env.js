import { config } from "dotenv";

config({path: `.env`});

export const {
    PORT,
    DB_URI,
    NODE_ENV,
    JWT_SECRET,
    JWT_SECRET_EXPIRY,
    CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET,
    CLOUDINARY_URL,
    ARCJET_KEY,
    ARCJET_ENV
} = process.env;