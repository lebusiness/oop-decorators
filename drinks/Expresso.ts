import { Beverage } from "../beverageAbstract/Beverage";

export class Expresso extends Beverage {
  getDescription(): string {
    return "Expresso";
  }

  getCost(): number {
    return 22;
  }
}
