import { asyncHandler } from "../utils/async-handler.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { ApiResponse } from "../utils/api-response.js";
import { ApiError } from "../utils/api-errors.js";
import { generateToken } from "../utils/generateToken.js";

export const signup = asyncHandler( async(req,res) => {
    const { username,email,password } = req.body;

    if(!username || !email || !password){
        throw new ApiError(400,"all fields are required");
    }
   
    //checking if user already exists
    const userExists = await User.findOne({email});
    if(userExists){
        throw new ApiError(409,"user already exists");
    }

    //hash password
    const hashedPassword = await bcrypt.hash(password,10);

    //create a new user
    const newUser = await User.create({username,email,password:hashedPassword});

    const user = await User.findById(newUser._id).select("-password");

    const token = generateToken(newUser._id,res);

    res.status(201).json(
        new ApiResponse(
            201,
            "user registered successfully",
            { user:user }
        )
    );

});

export const login = asyncHandler( async(req,res) => {

});

export const logout = asyncHandler( async(req,res) => {

});