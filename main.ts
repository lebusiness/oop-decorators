import { stdin, stdout } from "node:process";
import { Beverage } from "./beverageAbstract/Beverage";
import {
  BeverageDecorator,
  DarkRoast,
  Decaf,
  Expresso,
  HouseBlend,
  Milk,
  Mocha,
  Soy,
  Whip,
} from "./drinks";
import { createInterface } from "node:readline/promises";

const beverageMap: Record<string, new () => Beverage> = {
  "1": HouseBlend,
  "2": DarkRoast,
  "3": Expresso,
  "4": Decaf,
};

const condimentMap: Record<
  string,
  new (beverage: Beverage) => BeverageDecorator
> = {
  "1": Milk,
  "2": Mocha,
  "3": Soy,
  "4": Whip,
};

const main = async () => {
  const reader = createInterface({
    input: stdin,
    output: stdout,
  });

  console.log(
    "Напитки:\n",
    Object.entries(beverageMap)
      .map(([key, value]) => ` ${key}): ${value.prototype.constructor.name}`)
      .join("\n")
  );

  const beverageNumber = await reader.question("Выберите код напитка: ");

  const isValidBeverageNumber = beverageMap[beverageNumber] !== undefined;

  if (!isValidBeverageNumber) {
    throw new Error("Invalid beverage number");
  }

  const mainBeverage = new beverageMap[beverageNumber]();

  let beverage = mainBeverage;

  const condiments = [
    ...Object.keys(condimentMap).map(
      (val) => ` ${val}): ${condimentMap[val].prototype.constructor.name}`
    ),
  ];

  console.log("Добавки: \n", condiments.join("\n"));

  const condimentsInput = await reader.question(
    "Введите номера добавок через запятую или оставьте пустую строку: "
  );

  const condimentNumbers = condimentsInput
    .replaceAll(" ", "")
    .split(",")
    .filter(Boolean);

  const isValidCondimentNumbers =
    condimentNumbers.every(
      (condimentNumber) => condimentMap[condimentNumber] !== undefined
    ) || condimentsInput === "";

  if (!isValidCondimentNumbers) {
    throw new Error("Invalid condiment numbers");
  }

  const condimentDecorators = condimentNumbers.map(
    (code) => condimentMap[code]
  );

  for (const decorator of condimentDecorators) {
    beverage = new decorator(beverage);
  }

  console.log(`${beverage.getDescription()}: ${beverage.getCost()}$`);

  reader.close();
};

main();
