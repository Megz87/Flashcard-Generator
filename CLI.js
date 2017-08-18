var fs = require ("fs");
var inquirer = require("inquirer");
var flashcard = require("flashcard");
var BasicCard = require("./BasicCard.js")
var ClozeCard = require("./ClozeCard.js")


//constructor function used to create  flashcard objects
function BasicCard(front, back) {
  this.front = front;
  this.back = back;
}

inquirer.prompt([													//use inquirer to ask question
    {
        type: "list",												//type list allows user a choice betw basic or cloze
        message: "Would you like to create basic flash cards or cloze flash cards?",	//message is a question to the user
        choices: ["basic", "cloze"],									//possible answers to question
        name: "basicOrcloze"											//object will be referred to as basicOrcloze
    }
]).then(function (answer) {							//function will capture user answers and store answers in answer
    if (answer.basicOrcloze === "basic") {			//If the answer to basicOrcloze is basic then
        createBasicCards();								//call the createBasicCard function
    } else {										//else
        createClozeCards();								//call the createClozeCards function
    }
});

function createBasicCards(){
	inquirer.prompt([
	{
		type: "input",
		message: "Fill in question",
		name: "front"
	},
	{
		type: "input",
		message: "Fill in answer",
		name: "back"
	}




		])






}


















// inquirer.prompt([

// {
// 	type: "input",
// 	message: "How do you say thank you in french?",
// 	name: "merci",
// }


// {
// 	type: "input",
// 	message: "How do you say sorry in french?",
// 	name: "pardon",
// }	


// {
// 	type: "input",
// 	message: "How do you say welcome in french?",
// 	name: "bienvenue",
// }	


// {
// 	type: "input",
// 	message: "How do you say goodbye in french?",
// 	name: "au revoir",
// }

// {
// 	type: "input",
// 	message: "How do you say good evening in french?",
// 	name: "bonne nuit",
// }


// // After the prompt, store the user's response in a variable called answers.
// ]).then(function(answers) {


// });
