import { asyncHandler } from "../utils/async-handler.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { ApiResponse } from "../utils/api-response.js";
import { ApiError } from "../utils/api-errors.js";
import { generateToken } from "../utils/generateToken.js";
import cloudinary from "../utils/cloudinary.js";

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
    const { email,password } = req.body;
    const user = await User.findOne({email})
    
    if(!user){
        throw new ApiError(400,"invalid credentials");
    }

    const isPasswordCorrect = await bcrypt.compare(password,user.password);
    if(!isPasswordCorrect){
        throw new ApiError(400,"invalid credentials");
    }

    const token = generateToken(user._id,res);
    res.status(201).json(
        new ApiResponse(
            201,
            "user logged in successfully",
            { user:user }
        )
    );


});

export const logout = (req,res) => {
    res.cookie("jwt","",{maxAge:0});
    res.status(200).json(
        new ApiResponse(
            200,
            "user logged out successfully"
        )
    );
};

export const updateProfile = asyncHandler(async (req, res) => {

    const { avatar } = req.body;
    if(!avatar){
        throw new ApiError(400,"avatar is required");
    }

    const userId = req.user._id;
    const user = await User.findById(userId);

    if(!user){
        throw new ApiError(404, "User not found");
    }

    //delete old avatars
    if (user.avatarPublicId){
        await cloudinary.uploader.destroy(user.avatarPublicId);
    }
    //upload new avatar
    const uploadResponse = await cloudinary.uploader.upload(avatar);
    
    if (!uploadResponse?.secure_url){
        throw new ApiError(500, "Failed to upload avatar");
    }
    
    //update user
    const updatedUser = await User.findByIdAndUpdate(
        userId,
        {
            avatar:uploadResponse.secure_url,
            avatarPublicId: uploadResponse.public_id
        },
        {new:true}
    ).select("-password");

    return res.status(200).json(
        new ApiResponse(
            200,
            "Profile updated successfully",
            updatedUser
        )
    );
});   