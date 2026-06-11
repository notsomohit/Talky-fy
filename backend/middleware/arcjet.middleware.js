import { isSpoofedBot } from "@arcjet/inspect";
import { asyncHandler } from "../utils/async-handler.js";
import { ApiError } from "../utils/api-errors.js";
import { aj } from "../utils/arcjet.js";

export const arcjetMiddleware = asyncHandler(async (req,res,next) => {

    const decision = await aj.protect(req);

    if(decision.isDenied()){

        if(decision.reason.isRateLimit()){
            throw new ApiError(403,"rate limit exceeded");
        }

        if(decision.reason.isBot()){
            throw new ApiError(403,"bot detected");
        }

        throw new ApiError(403,"access denied by security policy");
    }

    //detect spoof bots(bots pretending to be humans)
    if(decision.results.some(isSpoofedBot)){
        throw new ApiError(403,"spoof bot detected");
    }

    next();
});