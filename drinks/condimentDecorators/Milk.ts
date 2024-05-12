import { BeverageDecorator } from "./_model";

export class Milk extends BeverageDecorator {
  getCost() {
    return this.beverage.getCost() + 3;
  }

  getDescription() {
    return this.beverage.getDescription() + ", milk";
  }
}
