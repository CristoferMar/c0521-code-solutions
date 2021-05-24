console.log('Lodash is loaded:', typeof _ !== 'undefined');

// make four players
var players = [
  { name: 'Jimmy', hand: [] }, { name: 'Robert', hand: [] },
  { name: 'Noor', hand: [] }, { name: 'Jaya', hand: [] }
];

// make a deck of 52 unique cards
var deck = [
  { Dace: 11 }, { D2: 2 }, { D3: 3 }, { D4: 4 }, { D5: 5 }, { D6: 6 }, { D7: 7 },
  { D8: 8 }, { D9: 9 }, { D10: 10 }, { Djack: 10 }, { Dqueen: 10 }, { Dking: 10 },

  { Sace: 11 }, { S2: 2 }, { S3: 3 }, { S4: 4 }, { S5: 5 }, { S6: 6 }, { S7: 7 },
  { S8: 8 }, { S9: 9 }, { S10: 10 }, { Sjack: 10 }, { Squeen: 10 }, { Sking: 10 },

  { Hace: 11 }, { H2: 2 }, { H3: 3 }, { H4: 4 }, { H5: 5 }, { H6: 6 }, { H7: 7 },
  { H8: 8 }, { H9: 9 }, { H10: 10 }, { Hjack: 10 }, { Hqueen: 10 }, { Hking: 10 },

  { Cace: 11 }, { C2: 2 }, { C3: 3 }, { C4: 4 }, { C5: 5 }, { C6: 6 }, { C7: 7 },
  { C8: 8 }, { C9: 9 }, { C10: 10 }, { Cjack: 10 }, { Cqueen: 10 }, { Cking: 10 }
];

// shuffle the deck
var shuffledDeck = [];

for (var i = 0; i < 52; i++) {
  var shufCard = Math.floor(Math.random() * deck.length);
  shuffledDeck.push(deck[shufCard]);
  deck.splice(shufCard, 1);
}

// deal two cards to each player
for (i = 0; i < players.length; i++) {
  players[i].hand = [shuffledDeck[0], shuffledDeck[1]];
  shuffledDeck.splice(0, 2);
}

// find the player with the highest score

var winners = [];
var score = 0;
for (i = 0; i < players.length; i++) {
  var playerScore = players[i].hand[0][Object.keys(players[i].hand[0])[0]] + players[i].hand[1][Object.keys(players[i].hand[1])[0]];
  if (playerScore > score) {
    score = playerScore;
    winners = [];
    winners.push(players[i]);
  } else if (playerScore === score) {
    winners.push(players[i]);
  }
  console.log('player:', players[i].name, 'points:', playerScore);
}

if (winners.length > 1) {
  console.log('Winners:', winners);
} else {
  console.log('Winner:', winners);
}
