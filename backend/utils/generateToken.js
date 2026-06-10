import jwt from "jsonwebtoken";
import {JWT_SECRET,JWT_SECRET_expiry} from "../config/env.js";

export const generateToken = (userId,res) => {
    const token = jwt.sign({userId},JWT_SECRET,{expiresIn:JWT_SECRET_EXPIRY});
}