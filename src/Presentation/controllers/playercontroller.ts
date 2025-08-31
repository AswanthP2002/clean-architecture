import { Request, Response } from "express";
import IPlayerUseCase from "../../Application/Interfaces/useCase/IPlayerUseCase";
import AddPlayerRequestDTO from "../DTOs/addPlayerRequestDTO";
import CreateCardDto from "../../Application/DTOs/createCardDto";

export default class PlayerController {
    constructor(private playerUC : IPlayerUseCase){}

    public mapToCreateCardDTO(addPlayerReqDto : AddPlayerRequestDTO) : CreateCardDto {
        return {
            name:addPlayerReqDto.name,
            cardType:addPlayerReqDto.cardType,
            club:addPlayerReqDto.club,
            nation:addPlayerReqDto.nation,
            rating:addPlayerReqDto.rating
        }
    }

    async addPlayerCard(req : Request, res : Response) : Promise<void> {
        try {
            const createCardDto = this.mapToCreateCardDTO(req.body) //conversion
            const result = await this.playerUC.addPlayer(createCardDto)//operation
            res.status(200).json({success:true, message:'Player added successfully', result})//response
            return
        } catch (error : unknown) {
            console.log('Error occured while adding player', error)
            res.status(500).json({success:false, message:'Something wen wrong, please try again after some time'})
            return
        }
    }

    async getPlyerCardById(req : Request, res : Response) : Promise<void> {
        try {
            const result = await this.playerUC.getPlayerById(req.params?.id)
            res.status(200).json({success:true, message:'Candidate fetched succesfully', result})
            return
        } catch (error : unknown) {
            console.log('Error occured while fetching candidate')
            res.status(500).json({success:false, message:'Something went wrong, please try again after sometime'})
            return
        }
    }

    async getAllPlayerCards(req : Request, res : Response) : Promise<void> {
        try {
            const result = await this.playerUC.getAllPlayers()
            res.status(200).json({success:true, message:'Players list fetched successfully', result})
            return
        } catch (error : unknown) {
            console.log('Error occured while fetching players list', error)
            res.status(500).json({success:false, messgae:'Something went wrong, please try again after some time'})
            return
        }
    }
}