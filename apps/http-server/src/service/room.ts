import {prismaClient} from "@repo/db/client";

interface RoomType{
    roomName: string
    adminId: string
}
export async function createRoom (payload: RoomType){
    const Room = prismaClient.room.create({
        data:{
            slug: payload.roomName,
            adminId: payload.adminId
        }
    })
    return Room;
}