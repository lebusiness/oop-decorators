import { Beverage } from "../../beverageAbstract/Beverage";

export abstract class BeverageDecorator extends Beverage {
  protected beverage: Beverage;

  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }
}
