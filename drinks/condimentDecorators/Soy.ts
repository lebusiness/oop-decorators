import { BeverageDecorator } from "./_model";

export class Soy extends BeverageDecorator {
  getCost() {
    return this.beverage.getCost() + 5;
  }

  getDescription() {
    return this.beverage.getDescription() + ", soy";
  }
}
