import { Request, Response } from "express";
import {createUserSchema} from "@repo/common/schema";
import { createUser, findUser } from "../service/user";
import { comparePassword, hashPassword } from "../lib/hashedPassword";
import { createToken } from "@repo/be-common/token";

const signup = async(req: Request, res: Response)=>{
    const verifyInput = createUserSchema.safeParse(req.body);
    if(!verifyInput.success){
        res.json({
            message:"Incorrect Input"
        });
        return;
    }
    const {username, email, password}= verifyInput.data;
    
    try {
        const hashedPassword: string = await hashPassword(password);
        const payload = {
            username,
            email,
            hashedPassword
        }
        const user = await createUser(payload);

        res.status(200).json({
            message: "User registered Successfully",
            user
        })
    } catch (error) {
        res.status(500).json({
            message:"User not created Internal server error"
        })    
    }
}

const signin = async(req: Request, res: Response)=>{
    const email = req.body.email as string;
    const password = req.body.password;
    try {
        const foundUser = await findUser(email);
        if(!foundUser){
            res.json({
                message:"User not found"
            })
            return
        }
        const hashedPasssord = foundUser.password;
        const passwordMatch = await comparePassword(password, hashedPasssord);
        if(!passwordMatch){
            res.status(404).json({
                message:"Incorrect Password or email"
            })
        }
        const token = createToken({id: foundUser.id as string});
        res.status(200).json({
            message: "User Logined Successfully",
            token: token
        })
    } catch (error) {
        res.status(500).json({
            messgae: "Bad Request"
        })
    }
}

export default {signup, signin};