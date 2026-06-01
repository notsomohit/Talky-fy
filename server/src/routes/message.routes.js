import Router from "express";

const messageRouter = Router();

messageRouter.get("/",(req,res)=>{
    res.send("message endpoint");
});

export default messageRouter;