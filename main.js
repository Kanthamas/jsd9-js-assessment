"use strict";
// JS Assessment: Find Your Hat //
const prompt = require("prompt-sync")({ sigint: true });
const clear = require("clear-screen");

const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

class Field {
	constructor(field = [[]]) {
		this.field = field;

		// Replace with your own code //
		// Set the home position at (0, 0) before the game starts
		this.positionRow = 0;
		this.positionCol = 0;
		this.field[this.positionRow][this.positionCol] = pathCharacter;
	}

	// Print field method to make it eaier
	print() {
		clear();
		// Your print map code here
		// YOUR CODE
		console.log(this.field); // Please REMOVE this line before you start your code!
		console.log(this.field[this.positionRow][this.positionCol]); // Please REMOVE this line before you start your code!
		console.log(this.field[2][this.positionCol]); // Please REMOVE this line before you start your code!
	}

	// The rest of your code starts here
	// YOUR CODE
}

// Game Mode ON
// Remark: Code example below should be deleted and use your own code.
const newGame = new Field([
	["░", "░", "O"],
	["░", "O", "░"],
	["░", "^", "░"],
]);
newGame.print();
