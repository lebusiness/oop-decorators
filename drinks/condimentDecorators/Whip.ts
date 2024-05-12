import { BeverageDecorator } from "./_model";

export class Whip extends BeverageDecorator {
  getCost() {
    return this.beverage.getCost() + 6;
  }

  getDescription() {
    return this.beverage.getDescription() + ", whip";
  }
}
