"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillSchema = void 0;
const mongoose_1 = require("mongoose");
exports.SkillSchema = new mongoose_1.Schema({
    skill: { type: String },
    playerId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'player', required: true }
});
