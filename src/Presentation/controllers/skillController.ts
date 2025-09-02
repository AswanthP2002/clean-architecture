import { Request, Response } from "express";

import ISkillUseCase from "../../Application/Interfaces/useCase/ISkillUseCase";
import AddPlayerRequestDTO from "../DTOs/addPlayerRequestDTO";
import { CreateSkillDTO } from "../../Application/DTOs/createSkillDto";
import { AddPlayerSkillRequestDTO } from "../DTOs/addSkillRequestDTO";

export default class SkillController {
    constructor(private readonly addSkill : ISkillUseCase) {}

    public mapToCreateSkillDTO(dto : AddPlayerSkillRequestDTO) : CreateSkillDTO {
        return {...dto}
    }

    async addPlayerSkill(req : Request, res : Response) : Promise<void> {
        const playerId = req.params.playerId
        try {
            const dto = this.mapToCreateSkillDTO({playerId, ...req.body})
            const result = await this.addSkill.addPlayerSkill(dto)
            result
                ? res.status(200).json({success:true, message:'Succesfully added', result})
                : res.status(400).json({success:false, message:'Something went wrong please try again after some time'})
            return
        } catch (error : unknown) {
            console.log('error occured while adding player skill', error instanceof Error ? error.message : null)
            return
        }
    }

    async testAggregatedData(req : Request, res : Response) : Promise<void> {
        try {
            const result = await this.addSkill.getSkillAggregatedData(req.params.id)
            result
                ? res.status(200).json({success:true, message:'Succesfully fetched', result})
                : res.status(400).json({success:false, message:'Something went wrong please try again after some time'})
                return
        } catch (error) {
            console.log('erro occured ', error instanceof Error ? error.message : null)
            return
        }
    }
}