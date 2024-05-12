import { Beverage } from "../beverageAbstract/Beverage";

export class Decaf extends Beverage {
  getDescription(): string {
    return "Decaf";
  }

  getCost(): number {
    return 25;
  }
}
