import Router from "express"
import { protectRoute } from "../middleware/auth.middleware.js";
import { getAllContacts,getMessagesByUserId,sendMessage,getChatPartners } from "../controllers/message.controller.js";
import { arcjetMiddleware } from "../middleware/arcjet.middleware.js";

const messageRouter = Router();

messageRouter.use(arcjetMiddleware,protectRoute);

messageRouter.get("/contacts",getAllContacts);
messageRouter.get("/chats",getChatPartners);
messageRouter.get("/:id",getMessagesByUserId);
messageRouter.post("/send/:id",sendMessage);

export default messageRouter;