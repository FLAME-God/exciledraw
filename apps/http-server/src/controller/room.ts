import { createRoom } from "../service/room";
import { AuthenticatedRequestHandler } from "../utils/type";

const roomCreate: AuthenticatedRequestHandler = async(req, res)=>{
    const roomName = req.body.roomName as string ;
    const adminId = req.userId!;
    try {
        const payload = {
            roomName,
            adminId
        }
        const room = await createRoom(payload);

        res.status(200).json({
            roomId: room.id,
            message: "room created successfuly"
        })
    } catch (error) {
        res.json("Room name already exists Bad Request");
    }
}

export default {roomCreate}