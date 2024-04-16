#! /usr/bin/env node
import inquirer from "inquirer";
let currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
};
let user_Ans = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from Currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "to",
        message: "Enter to Currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "amount",
        message: "Enter your amount",
        type: "number"
    }
]);
let fromAmount = currency[user_Ans.from];
let toAmount = currency[user_Ans.to];
let amount = user_Ans.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
// console.log(fromAmount);
// console.log(toAmount);
// console.log(amount);
let converte = Math.floor(convertedAmount);
console.log(converte);
