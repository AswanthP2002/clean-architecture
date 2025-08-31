import mongoose from "mongoose";
import Player from "../Domain/Entities/player";

export interface PlayerDocWithId extends Player {
    _id : mongoose.Types.ObjectId
}