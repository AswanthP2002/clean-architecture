import PlayerSkill from "../../../Domain/Entities/skill";

export default interface ISkillRepo {
    add(skill : PlayerSkill) : Promise<PlayerSkill | null>
    aggregateData(id : string) : Promise<any>
}