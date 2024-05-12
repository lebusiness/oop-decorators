"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Whip = void 0;
const _model_1 = require("./_model");
class Whip extends _model_1.BeverageDecorator {
    getCost() {
        return this.beverage.getCost() + 6;
    }
    getDescription() {
        return this.beverage.getDescription() + ", whip";
    }
}
exports.Whip = Whip;
