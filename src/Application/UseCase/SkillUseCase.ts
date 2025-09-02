import PlayerSkill from "../../Domain/Entities/skill";
import { CreateSkillDTO, SkillDTO } from "../DTOs/createSkillDto";
import ISkillRepo from "../Interfaces/repository/ISkillRepo";
import ISkillUseCase from "../Interfaces/useCase/ISkillUseCase";

export default class SkillUseCase implements ISkillUseCase {
    constructor(private _repo : ISkillRepo) {}

    public mapToSkill(dto : CreateSkillDTO) : PlayerSkill {
        return {
            skill:dto.skill,
            playerId:dto.playerId
        }
    }

    public mapToSkillDto(skill : PlayerSkill) : SkillDTO {
        return {
            id:skill.id,
            playerId:skill.playerId,
            skill:skill.skill
        }
    }

    async addPlayerSkill(createSkillDto: CreateSkillDTO): Promise<SkillDTO | null> {
        console.log('upcomign requrest for add skill', createSkillDto)
        const newSkill = this.mapToSkill(createSkillDto)
        const result = await this._repo.add(newSkill)
        if(result){
            const dto = this.mapToSkillDto(result)
            return dto
        }
        return null
    }

    async getSkillAggregatedData(id: string): Promise<any> {
        const result = await this._repo.aggregateData(id)
        return result
    }
}