"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillDAO = void 0;
const mongoose_1 = require("mongoose");
const skill_schema_1 = require("../Schemas/skill.schema");
exports.SkillDAO = (0, mongoose_1.model)('skill', skill_schema_1.SkillSchema);
