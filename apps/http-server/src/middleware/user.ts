import { verifToken } from "@repo/be-common/token";
import { AuthenticatedRequestHandler } from "../utils/type";

export const authUser: AuthenticatedRequestHandler = (req, res, next)=>{
    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(403).json({
            message:"Token is required"
        });
    }

    const token = authHeader.startsWith("Bearer ")? authHeader.split(" ")[1]: authHeader;

    try {
        const decoded = verifToken(token as string);

        req.userId = decoded.id;
        next();
    } catch (error) {
        console.log(`Error while verifying the tokwn: ${error}`);
        return res.status(403).json({
            messgae: "Invalid or expired token"
        })
    }
}