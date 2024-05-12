"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Milk = void 0;
const _model_1 = require("./_model");
class Milk extends _model_1.BeverageDecorator {
    getCost() {
        return this.beverage.getCost() + 3;
    }
    getDescription() {
        return this.beverage.getDescription() + ", milk";
    }
}
exports.Milk = Milk;
