import ISkillRepo from "../../Application/Interfaces/repository/ISkillRepo";
import PlayerSkill from "../../Domain/Entities/skill";
import { SkillDAO } from "../DAOs/skill.dao";

export default class SkillRepository implements ISkillRepo {
    async add(skill: PlayerSkill): Promise<PlayerSkill | null> {
        const result = await SkillDAO.insertOne(skill)
        return {
            id:result._id.toString(),
            playerId:result.playerId.toString(),
            skill:result.skill
        }
    }

    async aggregateData(id: string): Promise<any> {
        const result = await SkillDAO.aggregate([
            {$lookup:{
                from:'players',
                localField:'playerId',
                foreignField:'_id',
                as:'playerDetails'
            }},
            {$unwind:'$playerDetails'}
        ])

        return result
    }
}