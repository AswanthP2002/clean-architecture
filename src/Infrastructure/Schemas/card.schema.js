"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardSchema = void 0;
const mongoose_1 = require("mongoose");
exports.CardSchema = new mongoose_1.Schema({
    name: { type: String },
    club: { type: String },
    nation: { type: String },
    cardType: { type: String },
    rating: { type: String }
});
