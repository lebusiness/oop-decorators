"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DarkRoast = void 0;
const Beverage_1 = require("../beverageAbstract/Beverage");
class DarkRoast extends Beverage_1.Beverage {
    getDescription() {
        return "Dark roast";
    }
    getCost() {
        return 30;
    }
}
exports.DarkRoast = DarkRoast;
