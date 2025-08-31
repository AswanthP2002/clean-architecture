import { Db } from "mongodb";
import IPlayerRepo from "../../Application/Interfaces/repository/IPlayerRepo";
import Player from "../../Domain/Entities/player";
import { PlayerDocWithId } from "../types";
import mongoose from "mongoose";

export default class PlayerRepository implements IPlayerRepo {
    private readonly _db : Db
    private _collection : string
    constructor(_db : Db){
        this._db = _db
        this._collection = 'player'
    }

    async getAll(): Promise<Player[] | null> {
        const result = await this._db.collection<PlayerDocWithId>(this._collection).find().toArray()
        return result
    }

    async getById(id: string): Promise<Player | null> {
        const result = await this._db.collection<PlayerDocWithId>(this._collection).findOne({_id:new mongoose.Types.ObjectId(id)})
        return result
    }

    async add(player: Player): Promise<Player> {
        const result = await this._db.collection<Player>(this._collection).insertOne(player)
        return {
            ...player,
            id:result.insertedId.toString()
        }
    }
}