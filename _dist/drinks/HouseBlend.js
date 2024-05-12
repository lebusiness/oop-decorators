"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HouseBlend = void 0;
const Beverage_1 = require("../beverageAbstract/Beverage");
class HouseBlend extends Beverage_1.Beverage {
    getDescription() {
        return "House Blend";
    }
    getCost() {
        return 20;
    }
}
exports.HouseBlend = HouseBlend;
