import { Beverage } from "../beverageAbstract/Beverage";

export class DarkRoast extends Beverage {
  getDescription(): string {
    return "Dark roast";
  }

  getCost(): number {
    return 30;
  }
}
