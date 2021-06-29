console.log('Lodash is loaded:', typeof _ !== 'undefined');

// make four players
var players = [
  { name: 'Jimmy' }, { name: 'Robert' },
  { name: 'Noor' }, { name: 'Jaya' }
];

// make a deck of 52 unique cards
var suits = ['diamonds', 'clubs', 'hearts', 'spades'];
var ranks = ['a', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'j', 'q', 'k'];
var deck = [];
for (var i = 0; i < 4; i++) {
  for (var j = 0; j < 13; j++) {
    var card = { suit: suits[i], rank: ranks[j] };
    deck.push(card);
  }
}

// shuffle the deck
var shuffledDeck = [];
while (deck.length > 0) {
  var index = Math.floor(Math.random() * deck.length);
  shuffledDeck.push(deck[index]);
  deck.splice(index, 1);
}

// deal two cards to each player
for (i = 0; i < players.length; i++) {
  players[i].hand = [shuffledDeck[0], shuffledDeck[1]];
  shuffledDeck.splice(0, 2);
}

// find the player with the highest score
var faceCards = ['j', 'q', 'k'];
var winners = [];
var score = 0;
function cardValue(card) {
  if (typeof card.rank === 'string') {
    if (faceCards.indexOf(card.rank) > -1) {
      return 10;
    } else {
      return 11;
    }
  } else {
    return card.rank;
  }
}
for (i = 0; i < players.length; i++) {
  var playerScore = cardValue(players[i].hand[0]) + cardValue(players[i].hand[1]);
  if (playerScore > score) {
    score = playerScore;
    winners = [];
    winners.push(players[i]);
  } else if (playerScore === score) {
    winners.push(players[i]);
  }
  console.log('player:', players[i].name, 'points:', playerScore, 'hand:', players[i].hand);
}

// declare the winner/winners
if (winners.length > 1) {
  console.log('Winners:', winners);
} else {
  console.log('Winner:', winners[0]);
}
