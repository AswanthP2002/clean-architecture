import { Schema } from "mongoose";
import Player from "../../Domain/Entities/player";

export const CardSchema = new Schema<Player>({
    name:{type:String},
    club:{type:String},
    nation:{type:String},
    cardType:{type:String},
    rating:{type:String}
})