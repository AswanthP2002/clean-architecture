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
class SkillUseCase {
    constructor(_repo) {
        this._repo = _repo;
    }
    mapToSkill(dto) {
        return {
            skill: dto.skill,
            playerId: dto.playerId
        };
    }
    mapToSkillDto(skill) {
        return {
            id: skill.id,
            playerId: skill.playerId,
            skill: skill.skill
        };
    }
    addPlayerSkill(createSkillDto) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('upcomign requrest for add skill', createSkillDto);
            const newSkill = this.mapToSkill(createSkillDto);
            const result = yield this._repo.add(newSkill);
            if (result) {
                const dto = this.mapToSkillDto(result);
                return dto;
            }
            return null;
        });
    }
    getSkillAggregatedData(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this._repo.aggregateData(id);
            return result;
        });
    }
}
exports.default = SkillUseCase;
