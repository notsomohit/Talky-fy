import jwt from "jsonwebtoken";
import {NODE_ENV,JWT_SECRET,JWT_SECRET_EXPIRY} from "../config/env.js";

export const generateToken = (userId,res) => {
    const token = jwt.sign({userId},JWT_SECRET,{expiresIn:JWT_SECRET_EXPIRY});

    res.cookie("jwt",token,{
        maxAge: 7*24*60*60*1000,
        httpOnly:true, //prevent xss attacks
        sameSite: "strict",//csrf attacks
        secure: NODE_ENV === "development"?false:true,
    });

    return token;
};