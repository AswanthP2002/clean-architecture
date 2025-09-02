import { CreateSkillDTO, SkillDTO } from "../../DTOs/createSkillDto";

export default interface ISkillUseCase {
    addPlayerSkill(createSkillDto : CreateSkillDTO) : Promise<SkillDTO | null>
    getSkillAggregatedData(id : string) : Promise<any>
}