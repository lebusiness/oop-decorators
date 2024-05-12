"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Decaf = void 0;
const Beverage_1 = require("../beverageAbstract/Beverage");
class Decaf extends Beverage_1.Beverage {
    getDescription() {
        return "Decaf";
    }
    getCost() {
        return 25;
    }
}
exports.Decaf = Decaf;
