import Player from "../../../Domain/Entities/player";
import CardDTO from "../../DTOs/cardDto";
import CreateCardDto from "../../DTOs/createCardDto";

export default interface IPlayerUseCase {
    getAllPlayers() : Promise<CardDTO[] | null>
    getPlayerById(id : string) : Promise<CardDTO | null>
    addPlayer(createCardDto : CreateCardDto) : Promise<CardDTO>
}