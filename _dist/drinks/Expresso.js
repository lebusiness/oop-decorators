"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Expresso = void 0;
const Beverage_1 = require("../beverageAbstract/Beverage");
class Expresso extends Beverage_1.Beverage {
    getDescription() {
        return "Expresso";
    }
    getCost() {
        return 22;
    }
}
exports.Expresso = Expresso;
