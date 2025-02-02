import {prismaClient} from "@repo/db/client"



interface UserType {
    username: string,
    email: string,
    hashedPassword: string,
}

export async function createUser (payload: UserType){
    const user = prismaClient.user.create({
        data:{
            username: payload.username,
            email: payload.email,
            password: payload.hashedPassword
        }
    })
    return user;
}

export async function findUser (email: string){
    const user = prismaClient.user.findFirst({
        where:{
            email: email
        }
    })
    return user;
}