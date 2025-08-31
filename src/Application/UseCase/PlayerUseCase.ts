import Player from "../../Domain/Entities/player";
import CardDTO from "../DTOs/cardDto";
import CreateCardDto from "../DTOs/createCardDto";
import IPlayerRepo from "../Interfaces/repository/IPlayerRepo";
import IPlayerUseCase from "../Interfaces/useCase/IPlayerUseCase";

export default class PlayerUseCase implements IPlayerUseCase {
    constructor(private readonly _repository : IPlayerRepo){}
    public mapToCardDto(playerCard : Player) : CardDTO {
        return {
            id:playerCard.id,
            cardType:playerCard.cardType,
            club:playerCard.club,
            name:playerCard.name,
            nation:playerCard.nation,
            rating:playerCard.rating
        }
    }
    public mapToCard(createCardDto : CreateCardDto) : Player {
        return {
            id:"",
            cardType:createCardDto.cardType,
            club:createCardDto.club,
            name:createCardDto.name,
            nation:createCardDto.nation,
            rating:createCardDto.rating
        }
    }
    async getAllPlayers(): Promise<CardDTO[] | null> {
        const cards = await this._repository.getAll()
        
        if(cards){
            const dto : CardDTO[] = []
            cards.forEach((card : Player) => {
                dto.push(this.mapToCardDto(card))
            })

            return dto
        }
        return null
        
    }

    async getPlayerById(id: string): Promise<CardDTO | null> {
        const card = await this.getPlayerById(id)
        if(card){
            const dto : CardDTO = this.mapToCardDto(card)
            return dto
        }
        return null
    }

    async addPlayer(createCardDto: CreateCardDto): Promise<CardDTO> {
        const newPlayerCard = this.mapToCard(createCardDto)
        const card = await this._repository.add(newPlayerCard)
        return this.mapToCardDto(card)
    }
}