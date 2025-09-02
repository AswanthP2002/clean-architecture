"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const skill_dao_1 = require("../DAOs/skill.dao");
class SkillRepository {
    add(skill) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield skill_dao_1.SkillDAO.insertOne(skill);
            return {
                id: result._id.toString(),
                playerId: result.playerId.toString(),
                skill: result.skill
            };
        });
    }
    aggregateData(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield skill_dao_1.SkillDAO.aggregate([
                { $lookup: {
                        from: 'players',
                        localField: 'playerId',
                        foreignField: '_id',
                        as: 'playerDetails'
                    } },
                { $unwind: '$playerDetails' }
            ]);
            return result;
        });
    }
}
exports.default = SkillRepository;
