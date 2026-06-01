import Router from "express";

const authRouter = Router();

authRouter.get("/signup",(req,res)=>{
    res.send("signup endpoint")
});

authRouter.get("/login",(req,res)=>{
    res.send("login endpoint")
});

authRouter.get("/logout",(req,res)=>{
    res.send("logout endpoint")
});

export default authRouter;