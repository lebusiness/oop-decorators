"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BeverageDecorator = void 0;
const Beverage_1 = require("../../beverageAbstract/Beverage");
class BeverageDecorator extends Beverage_1.Beverage {
    constructor(beverage) {
        super();
        this.beverage = beverage;
    }
}
exports.BeverageDecorator = BeverageDecorator;
