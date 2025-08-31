import Player from "../../../Domain/Entities/player";

export default interface IPlayerRepo {
    getAll() : Promise<Player[] | null>
    getById(id : string) : Promise<Player | null>
    add(player : Player) : Promise<Player>
}