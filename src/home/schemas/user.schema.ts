import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    timestamps: true // this will automatically add created_At and updated_At to db
})

export class User {

    @Prop()
    name: string;

    @Prop()
    phone: string;

    @Prop()
    email: string;

    @Prop()
    password: string;
 
} 

export const UserSchema = SchemaFactory.createForClass(User)