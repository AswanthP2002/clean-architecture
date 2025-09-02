import mongoose, { Schema } from "mongoose";
import PlayerSkill from "../../Domain/Entities/skill";
export interface SkillDocuemnt extends Omit<PlayerSkill, "playerId"> {
    playerId : mongoose.Types.ObjectId
}
export const SkillSchema = new Schema<SkillDocuemnt>({
    skill:{type:String},
    playerId:{type:Schema.Types.ObjectId, ref:'player', required:true}
})