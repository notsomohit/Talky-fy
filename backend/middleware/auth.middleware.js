import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import { asyncHandler } from "../utils/async-handler.js";
import { ApiResponse } from "../utils/api-response.js";
import { JWT_SECRET } from "../config/env.js";

export const protectRoute = asyncHandler(async (req,res,next)=> {
    const token = req.cookies.jwt;
    if(!token) return res.status(401).json(new ApiResponse(401,"unauthorised"));

    const decoded = jwt.verify(token,JWT_SECRET);
    if(!decoded) return res.status(401).json(new ApiResponse(401,"unauthorised"));

    const user = await User.findById(decoded.userId).select("-password");
    if(!user) return res.status(401).json(new ApiResponse(401,"unauthorised no user"));

    req.user = user;
    next();
});