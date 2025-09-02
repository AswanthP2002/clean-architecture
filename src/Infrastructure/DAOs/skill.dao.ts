import { model } from "mongoose";
import { SkillDocuemnt, SkillSchema } from "../Schemas/skill.schema";

export const SkillDAO = model<SkillDocuemnt>('skill', SkillSchema)