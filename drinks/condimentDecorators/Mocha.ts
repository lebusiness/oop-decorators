import { BeverageDecorator } from "./_model";

export class Mocha extends BeverageDecorator {
  getCost() {
    return this.beverage.getCost() + 4;
  }

  getDescription() {
    return this.beverage.getDescription() + ", mocha";
  }
}
