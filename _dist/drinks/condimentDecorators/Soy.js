"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Soy = void 0;
const _model_1 = require("./_model");
class Soy extends _model_1.BeverageDecorator {
    getCost() {
        return this.beverage.getCost() + 5;
    }
    getDescription() {
        return this.beverage.getDescription() + ", soy";
    }
}
exports.Soy = Soy;
