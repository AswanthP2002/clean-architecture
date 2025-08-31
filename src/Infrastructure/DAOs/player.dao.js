"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.playerDAO = void 0;
const mongoose_1 = require("mongoose");
const card_schema_1 = require("../Schemas/card.schema");
exports.playerDAO = (0, mongoose_1.model)('player', card_schema_1.CardSchema);
