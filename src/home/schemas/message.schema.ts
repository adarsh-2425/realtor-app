import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

export class Message {

    @Prop()
    id: string;

    @Prop()
    message: string;
}

export const MessageSchema = SchemaFactory.createForClass(Message)