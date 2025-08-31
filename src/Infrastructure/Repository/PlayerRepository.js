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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const player_dao_1 = require("../DAOs/player.dao");
class PlayerRepository {
    // private readonly _db : Db
    // private _collection : string
    // constructor(_db : Db){
    //     this._db = _db
    //     this._collection = 'player'
    // }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield player_dao_1.playerDAO.find().lean();
            //const result = await this._db.collection<PlayerDocWithId>(this._collection).find().toArray()
            return result;
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            //const result = await this._db.collection<PlayerDocWithId>(this._collection).findOne({_id:new mongoose.Types.ObjectId(id)})
            const result = yield player_dao_1.playerDAO.findById(new mongoose_1.default.Types.ObjectId(id));
            return result;
        });
    }
    add(player) {
        return __awaiter(this, void 0, void 0, function* () {
            //const result = await this._db.collection<Player>(this._collection).insertOne(player)
            const result = yield player_dao_1.playerDAO.insertOne(player);
            return Object.assign(Object.assign({}, player), { id: result._id.toString() });
        });
    }
}
exports.default = PlayerRepository;
