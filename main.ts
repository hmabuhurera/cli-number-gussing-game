#! /usr/bin/env node

import inquirer from "inquirer";

//variable

const randemNumer = Math.floor(Math.random() * 10 + 1);


const game = await inquirer.prompt([
    {
        name: "ussergussednumber",
        type: "number",
        message: "Please Guess a Number: ",
    },
]);

//conditinal Statment

if (game.ussergussednumber === randemNumer) {
    console.log("congratulation! you gussed the Puzzle you are a geious")
} else {
    console.log("you can lost your trun Please try again")
}