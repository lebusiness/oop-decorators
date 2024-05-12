"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_process_1 = require("node:process");
const drinks_1 = require("./drinks");
const promises_1 = require("node:readline/promises");
const beverageMap = {
    "1": drinks_1.HouseBlend,
    "2": drinks_1.DarkRoast,
    "3": drinks_1.Expresso,
    "4": drinks_1.Decaf,
};
const condimentMap = {
    "1": drinks_1.Milk,
    "2": drinks_1.Mocha,
    "3": drinks_1.Soy,
    "4": drinks_1.Whip,
};
const main = async () => {
    const reader = (0, promises_1.createInterface)({
        input: node_process_1.stdin,
        output: node_process_1.stdout,
    });
    console.log("Напитки:\n", Object.entries(beverageMap)
        .map(([key, value]) => ` ${key}): ${value.prototype.constructor.name}`)
        .join("\n"));
    const beverageNumber = await reader.question("Выберите код напитка: ");
    const isValidBeverageNumber = beverageMap[beverageNumber] !== undefined;
    if (!isValidBeverageNumber) {
        throw new Error("Invalid beverage number");
    }
    const mainBeverage = new beverageMap[beverageNumber]();
    let beverage = mainBeverage;
    const condiments = [
        ...Object.keys(condimentMap).map((val) => ` ${val}): ${condimentMap[val].prototype.constructor.name}`),
    ];
    console.log("Добавки: \n", condiments.join("\n"));
    const condimentsInput = await reader.question("Перечислите номера добавок через запятую, или оставьте пустую строку: ");
    const condimentNumbers = condimentsInput
        .replaceAll(" ", "")
        .split(",")
        .filter(Boolean);
    const isValidCondimentNumbers = condimentNumbers.every((condimentNumber) => condimentMap[condimentNumber] !== undefined) || condimentsInput === "";
    if (!isValidCondimentNumbers) {
        throw new Error("Invalid condiment numbers");
    }
    const condimentDecorators = condimentNumbers.map((code) => condimentMap[code]);
    for (const decorator of condimentDecorators) {
        beverage = new decorator(beverage);
    }
    console.log(`${beverage.getDescription()}: ${beverage.getCost()}$`);
    reader.close();
};
main();
