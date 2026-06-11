import Router from "express";
import { signup,login,logout,updateProfile } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
export const authRouter = Router();

authRouter.post("/signup",signup);

authRouter.post("/login",login);

authRouter.post("/logout",logout);

authRouter.put("/update-profile",protectRoute,updateProfile);