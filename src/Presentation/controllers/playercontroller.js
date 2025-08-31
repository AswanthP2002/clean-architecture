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
class PlayerController {
    constructor(playerUC) {
        this.playerUC = playerUC;
    }
    mapToCreateCardDTO(addPlayerReqDto) {
        return {
            name: addPlayerReqDto.name,
            cardType: addPlayerReqDto.cardType,
            club: addPlayerReqDto.club,
            nation: addPlayerReqDto.nation,
            rating: addPlayerReqDto.rating
        };
    }
    addPlayerCard(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const createCardDto = this.mapToCreateCardDTO(req.body); //conversion
                const result = yield this.playerUC.addPlayer(createCardDto); //operation
                res.status(200).json({ success: true, message: 'Player added successfully', result }); //response
                return;
            }
            catch (error) {
                console.log('Error occured while adding player', error);
                res.status(500).json({ success: false, message: 'Something wen wrong, please try again after some time' });
                return;
            }
        });
    }
    getPlyerCardById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const result = yield this.playerUC.getPlayerById((_a = req.params) === null || _a === void 0 ? void 0 : _a.id);
                res.status(200).json({ success: true, message: 'Candidate fetched succesfully', result });
                return;
            }
            catch (error) {
                console.log('Error occured while fetching candidate');
                res.status(500).json({ success: false, message: 'Something went wrong, please try again after sometime' });
                return;
            }
        });
    }
    getAllPlayerCards(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.playerUC.getAllPlayers();
                res.status(200).json({ success: true, message: 'Players list fetched successfully', result });
                return;
            }
            catch (error) {
                console.log('Error occured while fetching players list', error);
                res.status(500).json({ success: false, messgae: 'Something went wrong, please try again after some time' });
                return;
            }
        });
    }
}
exports.default = PlayerController;
