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
class SkillController {
    constructor(addSkill) {
        this.addSkill = addSkill;
    }
    mapToCreateSkillDTO(dto) {
        return Object.assign({}, dto);
    }
    addPlayerSkill(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const playerId = req.params.playerId;
            try {
                const dto = this.mapToCreateSkillDTO(Object.assign({ playerId }, req.body));
                const result = yield this.addSkill.addPlayerSkill(dto);
                result
                    ? res.status(200).json({ success: true, message: 'Succesfully added', result })
                    : res.status(400).json({ success: false, message: 'Something went wrong please try again after some time' });
                return;
            }
            catch (error) {
                console.log('error occured while adding player skill', error instanceof Error ? error.message : null);
                return;
            }
        });
    }
    testAggregatedData(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.addSkill.getSkillAggregatedData(req.params.id);
                result
                    ? res.status(200).json({ success: true, message: 'Succesfully fetched', result })
                    : res.status(400).json({ success: false, message: 'Something went wrong please try again after some time' });
                return;
            }
            catch (error) {
                console.log('erro occured ', error instanceof Error ? error.message : null);
                return;
            }
        });
    }
}
exports.default = SkillController;
