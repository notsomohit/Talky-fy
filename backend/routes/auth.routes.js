import Router from "express";
import { signup,login,logout,updateProfile } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

import { arcjetMiddleware } from "../middleware/arcjet.middleware.js";

export const authRouter = Router();

authRouter.use(arcjetMiddleware);

// authRouter.get("/test",arcjetMiddleware,(req,res)=>{
//     res.status(200).json({message:"test route"})
// });

authRouter.post("/signup",signup);

authRouter.post("/login",login);

authRouter.post("/logout",logout);

authRouter.put("/update-profile",protectRoute,updateProfile);

authRouter.get("/check",protectRoute,(req,res)=>{
    res.status(200).json(req.user);
});