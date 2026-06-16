import Router from "express"
import { protectRoute } from "../middleware/auth.middleware.js";
import { getAllContacts,getMessagesByUserId,sendMessage } from "../controllers/message.controller.js";

const messageRouter = Router();

messageRouter.use(protectRoute);

messageRouter.get("/contacts",getAllContacts);
// messageRouter.get("/chats",getChatPartners);
messageRouter.get("/:id",getMessagesByUserId);

messageRouter.post("/send/:id",sendMessage);

export default messageRouter;