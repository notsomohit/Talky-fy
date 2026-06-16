import { asyncHandler } from "../utils/async-handler.js";
import Message from "../models/message.model.js";
import User from "../models/user.model.js";
import { ApiResponse } from "../utils/api-response.js";
import cloudinary from "../utils/cloudinary.js";

export const getAllContacts = asyncHandler(async(req,res)=>{
    const loggedInUserId = req.user._id;
    const filteredUsers = await User.find({_id:{$ne:loggedInUserId}}).select("-password");
    res.status(200).json(new ApiResponse(200,"fetched all contacts sucessfully",{filteredUsers}));
});

export const getMessagesByUserId = asyncHandler(async (req,res)=>{
    const myId = req.user._id;
    const {id:userTochatId} = req.params;

    const message = await Message.find({
        $or: [
            {senderId:myId,receiverId:userTochatId},
            {senderId:userTochatId,receiverId:myId},
        ]
    });

    res.status(200).json(new ApiResponse(200,"get messages by user id sucessfull",{message}));

});

export const sendMessage = asyncHandler(async (req,res)=>{
    const {text,image} = req.body;
    const {id:receiverId} = req.params;
    const senderId = req.user._id;

    let imageUrl;
    if(image){
        const uploadResponse = await cloudinary.uploader.upload(image);
        imageUrl = uploadResponse.secure_url;
    }

    const newMessage = new Message({
        senderId,
        receiverId,
        text,
        image:imageUrl,
    });

    await newMessage.save();

    res.status(200).json(new ApiResponse(200,"message sent succesfully",{newMessage}));

});
