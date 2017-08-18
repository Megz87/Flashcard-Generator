var fs = require ("fs");
var inquirer = require("inquirer");
var flashcard = require("flashcard");
const f = require('flashcardz');


var BasicCard = function BasicCard(fronttext, backtext) {
     this.fronttext = fronttext;
     this.backtext = backtext;
   	 this.printInfo = function() {
   	 	console.log("hello");
   	 }
}

function makeCards(){
inquirer.prompt([
	{
		type: "input",
		message: "Enter question",
		name: "front"
	},
	{
		type: "input",
		message: "Enter answer",
		name: "back"
	}


	]).then(function(response){
		var firstPresident = new BasicCard(response.name, response.back)

})
};
 makeCards();

// // Convert this nice-looking object with flashcards into the Flashcardz format 
// const myCards = f.convert({
//   ostensible: 'stated or appearing to be true, but not necessarily so.',
//   palpable: 'able to be touched or felt.',
//   diaphanous: '(especially of fabric) light, delicate, and translucent.'
// }, 'objecty')
 
// // Get quized on the terminal over 1 card in that stack of flashcards 
// const myCardsAfterQuiz = flashcardz.quiz(myCards, require('flashcardz/cli-quizzer'), flashcardz.pick.random)
 
// // Get the term that you struggled with most from quizzes 
// const hardestCard = flashcardz.hardest(myCardsAfterQuiz)
// console.log(hardestCard.front + ' is a difficult word.') // ex: 'ostensible is a difficult word.' 







//   module.exports = BasicCard; 







