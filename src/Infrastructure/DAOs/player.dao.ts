import { model } from "mongoose";
import Player from "../../Domain/Entities/player";
import { CardSchema } from "../Schemas/card.schema";

export const playerDAO = model<Player>('player', CardSchema)