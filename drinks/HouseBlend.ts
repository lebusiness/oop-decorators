import { Beverage } from "../beverageAbstract/Beverage";

export class HouseBlend extends Beverage {
  getDescription(): string {
    return "House Blend";
  }

  getCost(): number {
    return 20;
  }
}
