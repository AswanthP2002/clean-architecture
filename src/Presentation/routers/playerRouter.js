"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PlayerRepository_1 = __importDefault(require("../../Infrastructure/Repository/PlayerRepository"));
const playercontroller_1 = __importDefault(require("../controllers/playercontroller"));
const PlayerUseCase_1 = __importDefault(require("../../Application/UseCase/PlayerUseCase"));
function PlayerRouter() {
    const playerRouter = express_1.default.Router();
    const playerRepo = new PlayerRepository_1.default();
    const playerUC = new PlayerUseCase_1.default(playerRepo);
    const playerController = new playercontroller_1.default(playerUC);
    playerRouter.get('/players', playerController.getAllPlayerCards.bind(playerController));
    playerRouter.get('/players/:id', playerController.getPlyerCardById.bind(playerController));
    playerRouter.post('/player', playerController.addPlayerCard.bind(playerController));
    return playerRouter;
}
exports.default = PlayerRouter;
