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
class PlayerUseCase {
    constructor(_repository) {
        this._repository = _repository;
    }
    mapToCardDto(playerCard) {
        return {
            id: playerCard.id,
            cardType: playerCard.cardType,
            club: playerCard.club,
            name: playerCard.name,
            nation: playerCard.nation,
            rating: playerCard.rating
        };
    }
    mapToCard(createCardDto) {
        return {
            id: "",
            cardType: createCardDto.cardType,
            club: createCardDto.club,
            name: createCardDto.name,
            nation: createCardDto.nation,
            rating: createCardDto.rating
        };
    }
    getAllPlayers() {
        return __awaiter(this, void 0, void 0, function* () {
            const cards = yield this._repository.getAll();
            if (cards) {
                const dto = [];
                cards.forEach((card) => {
                    dto.push(this.mapToCardDto(card));
                });
                return dto;
            }
            return null;
        });
    }
    getPlayerById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const card = yield this.getPlayerById(id);
            if (card) {
                const dto = this.mapToCardDto(card);
                return dto;
            }
            return null;
        });
    }
    addPlayer(createCardDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const newPlayerCard = this.mapToCard(createCardDto);
            const card = yield this._repository.add(newPlayerCard);
            return this.mapToCardDto(card);
        });
    }
}
exports.default = PlayerUseCase;
