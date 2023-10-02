import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    timestamps: true // this will automatically add created_At and updated_At to db
})

export class Home {

    @Prop()
    id: string;

    @Prop()
    address: string;

    @Prop()
    number_of_bedrooms: string;

    @Prop()
    number_Of_bathrooms: string;

    @Prop()
    city: string;

    @Prop()
    listed_date: string;

    @Prop()
    price: number;

    @Prop()
    land_size: number

    @Prop()
    propertyType: PropertyType

    @Prop()
    image: {
        id: string;
        url: string;
    }
}

export enum PropertyType {
    RESIDENTIAL = "residential",
    CONDO = "condo"
}

export const HomeSchema = SchemaFactory.createForClass(Home)