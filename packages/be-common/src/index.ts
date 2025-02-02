import jwt from "jsonwebtoken";

const jwt_secret = "oqsdhugdwqdo";

interface CustomJwtPayload{
    id: string
} 


export function createToken(payload: CustomJwtPayload){
    return `Bearer ${jwt.sign(payload, jwt_secret, {expiresIn:"1d"})}`; 
}

export function verifToken (token: string){
    return jwt.verify(token, jwt_secret) as CustomJwtPayload;
}