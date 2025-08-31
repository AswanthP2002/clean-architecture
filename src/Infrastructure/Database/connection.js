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
// const db_uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017'
// const db_name = process.env.DB_NAME || 'cleandb'
const dbUri = 'mongodb://127.0.0.1:27017/cleandb';
// let cachedDb : Db | null = null
const connectDb = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect(dbUri);
        console.log('Database connected succesfully');
    }
    catch (error) {
        console.log('Error occured while connecting database', error);
    }
});
exports.default = connectDb;
// const connectToDb = async () : Promise<Db> => {
//     if(cachedDb) return cachedDb
//     const client = new MongoClient(db_uri)
//     await client.connect()
//     cachedDb = client.db(db_name)
//     console.log(`Connected to ${db_name}`)
//     return cachedDb
// }
// export default connectToDb
