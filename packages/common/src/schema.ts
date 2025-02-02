import { z } from "zod";

export const createUserSchema = z.object({
    username: z.string().min(3).max(20),
    email: z.string(),
    password: z.string()
})

export const signinSchema = z.object({
    email: z.string().min(3).max(20),
    password: z.string()
})

export const createRoomSchema = z.object({
    roomName: z.string().min(3).max(20)
})