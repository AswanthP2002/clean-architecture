import IPlayerRepo from "../../Application/Interfaces/repository/IPlayerRepo";
import Player from "../../Domain/Entities/player";
import mongoose from "mongoose";
import { playerDAO } from "../DAOs/player.dao";

export default class PlayerRepository implements IPlayerRepo {

    async getAll(): Promise<Player[] | null> {
        const result = await playerDAO.find().lean()
        return result
    }

    async getById(id: string): Promise<Player | null> {
        const result = await playerDAO.findById(new mongoose.Types.ObjectId(id))
        return result
    }

    async add(player: Player): Promise<Player> {
        const result = await playerDAO.insertOne(player)
        return {
            ...player,
            id:result._id.toString()
        }
    }
}