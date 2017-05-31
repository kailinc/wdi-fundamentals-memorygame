// Variables for Cards, suit, and image 

var cards = [ {rank: 'queen', suit: 'hearts', cardImage: 'images/queen-of-hearts.png'},
			  {rank: 'queen', suit: 'diamonds', cardImage: 'images/queen-of-diamonds.png'},
			  {rank: 'king', suit: 'hearts', cardImage: 'images/king-of-hearts.png'},
			  {rank: 'king', suit: 'diamonds', cardImage: 'images/king-of-diamonds.png'},

]; 

// cards that are flipped, there are 2 
var cardsInPlay = []; 

//checks if the cards match
function checkForMatch() {
	if (cardsInPlay[0].rank === cardsInPlay[1].rank) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}

// flips the card 
function flipCard() {
	var cardId = this.getAttribute('data-id');
	this.setAttribute('src', cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId]); 
	if (cardsInPlay.length == 2) {
		checkForMatch();
	
		cardsInPlay = []; 
	} 
	console.log(cardsInPlay);
} 


// creates a Board with the Cards 
function createBoard() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img'); 
		cardElement.setAttribute('src', 'images/back.png'); 
		cardElement.setAttribute('data-id', i);
		cardElement.setAttribute('id',cards[i].cardImage);

		cardElement.addEventListener('click', flipCard); 

		document.getElementsByTagName('div')[0].appendChild(cardElement);

	}
}
createBoard(); 

