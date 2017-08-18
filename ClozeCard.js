var fs = require ("fs");
var inquirer = require("inquirer");
var flashcard = require("flashcard");
var BasicCard = require("./BasicCard.js")
var ClozeCard = require("./ClozeCard.js")


//cloze cards present a partial sentence on front...remaining sentences on back..
	//flash cards built this way have 3 parts 1) full text 2)cloze deletion 3)partial
	// full text-I love cherries
	//partial text- I love
	//cloze deletion - cherries(answer)
//constructor function for cloze card
function ClozeCard(text, cloze) {
     this.text = text.split(cloze);
     this.cloze = cloze;
 };



 

  module.exports = ClozeCard; 