var $button = document.querySelector('.reset');
$button.addEventListener('click', function () {
    var duration = 0.3,
        delay = 0.08;
    TweenMax.to($button, duration, { scaleY: 1.6, ease: Expo.easeOut });
    TweenMax.to($button, duration, { scaleX: 1.2, scaleY: 1, ease: Back.easeOut, delay: delay });
    TweenMax.to($button, duration * 1.25, { scaleX: 1, scaleY: 1, ease: Back.easeOut, delay: delay * 3 });
    location.reload();
});


//button animation click function
var $button = document.querySelector('.button');
$button.addEventListener('click', function () {
    var duration = 0.3,
        delay = 0.08;
    TweenMax.to($button, duration, { scaleY: 1.6, ease: Expo.easeOut });
    TweenMax.to($button, duration, { scaleX: 1.2, scaleY: 1, ease: Back.easeOut, delay: delay });
    TweenMax.to($button, duration * 1.25, { scaleX: 1, scaleY: 1, ease: Back.easeOut, delay: delay * 3 });
    let cardDealt = document.getElementsByClassName("card");

    for (let i = 0; i < cardDealt.length; i++) {
        TweenLite.from(cardDealt[i], { duration: .25, x: -100, alpha: 0, delay: i * .25 });
    }
});









// console.log("Blackjack Game");

// ///////********************************************************** DECK CLASS **********************************************************///////

// //full 52 card deck and/or remaining cards in deck
// class Deck {
//     constructor(cardCount, numSuits) {
//         this.count = 52;
//         this.numSuits = 4;
//     }

//     resetDeck() {
//         console.log("resetDeck() when button is pushed, run the refresh button function here");
//     }

//     deal() { //loop through 4 times-alternating between Player and Dealer
//         console.log("deal() generate 4 random Cards--assign card name each card");
//     }

// }

// ///////DECK NEW VARIABLES/////////////////////////////////////////////////////////
// var fullDeck = new Deck(52);
// var remainingDeck = new Deck(fullDeck - 1); //??
// var storedDeck = remainingDeck - 1;

// ///////DECK FUNCTIONS CALLED/////////////////////////////////////////////////////////
// this.fullDeck.resetDeck();

// ///////********************************************************** CARD CLASS **********************************************************///////

// //Player's cards and Dealers Cards //chosen randomly with conditions
// class Card { //cards dealt
//     constructor(name, symbol, pointValue, yesAce) {
//         this.name = name;
//         this.suit = suit;
//         this.pointValue = pointValue;
//         this.yesAce = true; //question here about boolean???
//     }

//     assignValue() {
//         console.log("assignValue() run logic to assign values to each random card out of full deck considering suit limits (cards remaining) and ace value of 1 or 11")
//     }
//     hide() {
//         console.log("hide() place this card face-down")
//     }
//     show() {
//         console.log("show() place this card face-up")
//     }
// }

// ///////CARD NEW VARIABLES/////////////////////////////////////////////////////////
// var ace = new Card("ace", this.suit, this.pointValue, "true"); //this.pointValue could be 1 or 11;
// var two = new Card("two", this.suit, 2, "false");
// var three = new Card("three", this.suit, 3, "false");
// var four = new Card("four", this.suit, 4, "false");
// var five = new Card("five", this.suit, 5, "false");
// var six = new Card("six", this.suit, 6, "false");
// var seven = new Card("seven", this.suit, 7, "false");
// var eight = new Card("eight", this.suit, 8, "false");
// var nine = new Card("nine", this.suit, 9, "false");
// var ten = new Card("ten", this.suit, 10, "false");
// var jack = new Card("jack", this.suit, 10, "false");
// var queen = new Card("queen", this.suit, 10, "false");
// var king = new Card("king", this.suit, 10, "false");

// //assign variable to each random card dealt (try to loop this with concatonation?)
// var pcard1 = new Card(); //players first card
// var pcard2 = new Card(); //players second card
// var dcard1 = new Card(); //dealer's first card (not showing)
// var dcard2 = new Card(); //dealer's second cardv

// ///////CARD FUNCTIONS CALLED/////////////////////////////////////////////////////////

// //call the deal() function and hide or show the card (try to loop this with concatonation?)
// this.pcard1.deal();
// this.pcard1.show(); //player's first card face up
// this.pcard1.assignValue();

// this.dcard1.deal();
// this.dcard1.hide(); //dealer's first card face down
// this.dcard1.assignValue();

// this.pcard2.deal();
// this.pcard2.show(); //player's second card face up
// this.pcard2.assignValue();

// this.dcard2.deal();
// this.dcard2.show(); //dealer's second card face up
// this.dcard2.assignValue();

// ///////********************************************************** SUIT CLASS **********************************************************///////

// class Suit extends Card {
//     constructor(name, symbol, color) {
//         name = this.name;
//         symbol = this.symbol;
//         color = this.color;
//     }
// }

// ///////SUIT NEW VARIABLES/////////////////////////////////////////////////////////
// var club = new Suit("club", "♣", "black")
// var diamond = new Suit("diamond", "&diams", "red")
// var spade = new Suit("spade", "&spades", "black")
// var heart = new Suit("heart", "&hearts", "red");


// ///////********************************************************** HAND CLASS **********************************************************///////

// //player and dealer's cards in a hand
// class Hand {
//     constructor(card1, card2, card1Value, card2Value, card3Value, totalHandValue) {
//         this.card1 = card1;
//         this.card2 = card2;
//         this.card1Value = card1Value;
//         this.card2Value = card2Value;
//         this.totalHandValue = totalHandValue;
//     }
//     combineValues() {
//         console.log("add value of player's first two cards and use only dealer first card");
//     }
//     showHandValue() {
//         console.log("showHandValue() appends the values from combineValue() for each hand (totalHandValue)");
//     }
// }

// ///////HAND NEW VARIABLES/////////////////////////////////////////////////////////

// //assigns hands to Players
// var handPlayer1 = new Hand(); //random pcard1 and pcard2 (example: 2 of hearts and 10 of clubs)
// var handDealer = new Hand(); //same as player hand with dcard1 and dcard2

// ///////HAND FUNCTIONS CALLED/////////////////////////////////////////////////////////

// this.handPlayer1.combineValues();
// this.handDealer.combineValues();

// this.handPlayer1.showHandValue();
// this.handDealer.showHandValue();


// ///////********************************************************** PLAYER CLASS **********************************************************///////

// //player and dealer
// class Player {
//     constructor(turnTrue, turnFalse) {
//         this.turnTrue = true;
//         this.turnFalse = false;
//     }

//     makeTurn() {
//         console.log("makeTurn() Either deal() to Player or to Dealer alternating")
//     }
// }

// ///////PLAYER NEW VARIABLES/////////////////////////////////////////////////////////

// var player1 = new Player();
// var dealer = new Player();

// /////// PLAYER FUNCTIONS CALLED /////////////////////////////////////////////////////////

// this.player1.makeTurn();
// this.dealer.makeTurn();






































//********************************************************** BEFORE DOING THE UML EXERCISE ***************************************************//
//values of each card
// var numCardValue = Math.floor(Math.random() * 9) + 2; //number 2 - 10 how to write this to only pick a single number only 4 times for each suit?
// console.log(numCardValue);

// var faceCardValue = 10;
// var jack = faceCardValue;
// var queen = faceCardValue;
// var king = faceCardValue;
// var ace = 11;
// var aceLow = 1;

// class Deck {
//     constructor(totalCount, remainingCount) {
//         total = 52;
//         remainingCount = this.remainingCount; //52 - 4 dealt
//         aceCount = 4;
//         jackCount = 4;
//         queenCount = 4;
//         kingCount = 4;
//         numCardsCount = this.numCardsCount;
//     }

//     deal() { //randomize one card out of 52 with conditions / alternate and loop twice for 2 cards each for dealer and player
//         console.log("deal 2 cards to the player and 2 cards to the dealer, alternating with the player receiving a card first");
//     }

//     resetDeck() { //shuffle or resets the deck to a full 52 card deck for a new game
//         console.log("Play again");
//     }
// }

// class Card {
//     constructor(cardValue, firstCard) {
//         cardValue = this.cardValue;
//         firstCardTrue = 1; //card1
//         firstCardFalse = 0; //card2 
//     }

//     cardFlip() { //take one of the two of each pair of cards and flip the second each received
//         console.log("Player turn happens");
//     }
// }

// //dealer or player
// class Players {
//     constructor(card1Value, card2Value, turnTrue, turnFalse) {
//         card1 = this.card1;
//         card2 = this.card2;
//         turnTrue = 1;
//         turnFalse = 0;
//     }

//     //alternates the players turn True (1) or False (0)
//     makeTurn() {
//             console.log("alternate players");
//         }
//         //after cardFlip()

//     checkValue() { //show value of card flipped + option to "Hit" or "Stay" //also conditions for ace up
//         console.log("players first card flip value/then ask for hit or stay")
//     }

//     playerHit() {
//         deal(); //pick 1 from remainingCount (52 - 4 that were dealt already) add that count to player's showingCount
//         console.log("player 1 hits")
//     }

//     playerstay() {
//         console.log()
//         console.log("pass play to the dealer"); //checkValue() dealer + option to "Hit or Stay"
//     }

//     dealerHit() {
//         console.log("dealer hits");
//     }

//     dealerStay() {
//         console.log("dealer stays");
//     }

//     //takes the values of total cards showing, compares them and determines whether the player
//     //which has closest to 21 without going over ("Win")
//     //go over 21 ("Busts") 
//     //equals 21 ("Blackjack") Deal
//     //or have the same value ("Push")
//     checkWinConditions() {
//         console.log("Declares player Win, Bust, Blackjack, or Push")

//     }
// }