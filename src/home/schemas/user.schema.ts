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

    @Prop()
    user_type: UserType;
 
} 

enum UserType {
    BUYER = "buyer",
    REALTOR = "realtor",
    ADMIN = "admin"
}

export const UserSchema = SchemaFactory.createForClass(User)