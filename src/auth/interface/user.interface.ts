import { Document } from "mongoose"; 

export interface IUserDetails extends Document{
    username : string,
    bio : string,
    phone : Number,
    image : Buffer,
    email : string,
    password : string,
    makePublic : boolean
}