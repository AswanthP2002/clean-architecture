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
const mongodb_1 = require("mongodb");
const db_uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017';
const db_name = process.env.DB_NAME || 'cleandb';
let cachedDb = null;
const connectToDb = () => __awaiter(void 0, void 0, void 0, function* () {
    if (cachedDb)
        return cachedDb;
    const client = new mongodb_1.MongoClient(db_uri);
    yield client.connect();
    cachedDb = client.db(db_name);
    console.log(`Connected to ${db_name}`);
    return cachedDb;
});
exports.default = connectToDb;
