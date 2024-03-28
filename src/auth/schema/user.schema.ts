import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose"

@Schema({collection : "user-information"})
export class UserDetails extends Document{
    @Prop({ required: true })
    username : string

    @Prop({ required: true })
    email : string

    @Prop({ required: true })
    password : string

    @Prop({ required: true })
    bio : string

    @Prop({ required: true })
    phone : Number

    @Prop({ required: true })
    image : string

    @Prop({ default : false })
    makePublic : boolean

    @Prop({ default : false })
    isAdmin : boolean

    @Prop({ default : [] })
    images : Array<string>
}

export const UserDetailsSchema = SchemaFactory.createForClass(UserDetails)