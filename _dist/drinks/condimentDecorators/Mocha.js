"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mocha = void 0;
const _model_1 = require("./_model");
class Mocha extends _model_1.BeverageDecorator {
    getCost() {
        return this.beverage.getCost() + 4;
    }
    getDescription() {
        return this.beverage.getDescription() + ", mocha";
    }
}
exports.Mocha = Mocha;
