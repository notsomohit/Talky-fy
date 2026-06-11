import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username:{
            type:String,
            required:true,
            trim:true,
            lowercase:true,
            minLength:2,
            maxLength:50,
        },
        email:{
            type:String,
            unique:true,
            required:[true,"user Email is required"],
            trim:true,
            lowercase:true,
            minLength:2,
            maxLength:50,
            match: [/\S+@\S+\.\S+/,"please enter a valid email address"],
        },
        password:{
            type:String,
            required: [true,"user password is required"],
            minLength:6,
        },
        avatar:{
            type:String,
            default:""
        },
        avatarPublicId:{
            type:String,
            default:""
        },
        isOnline:{
            type:Boolean,
            default:false
        },
        lastSeen:{
            type:Date
        }


    },{timestamps:true}
);

const User = mongoose.model("User",userSchema);
export default User;
