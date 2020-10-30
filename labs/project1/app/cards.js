console.log("The Game of War")
//https://www.youtube.com/watch?v=CLEd8Gph9hw  //tutorial source for help with the cards
//https://gist.github.com/darthneel/00e8966f45ef2b64652985d78d11443f //source the base for cards.json file with adjustments
//http://acbl.mybigcommerce.com/52-playing-cards/ //source for png images of the cards


//main start button//
// var $button = document.querySelector('#button');
// $button.addEventListener('click', function () {
//     console.log("Start Button");
//     var duration = 0.3,
//         delay = 0.08;
//     TweenMax.to($button, duration, { scaleY: 1.6, ease: Expo.easeOut });
//     TweenMax.to($button, duration, { scaleX: 1.2, scaleY: 1, ease: Back.easeOut, delay: delay });
//     TweenMax.to($button, duration * 1.25, { scaleX: 1, scaleY: 1, ease: Back.easeOut, delay: delay * 3 });
//     TweenMax.to($button, duration * 1.85, { opacity: 0 })
// });


//reset game button//
// var $reset = document.querySelector('.reset');
// $reset.addEventListener('click', function () {
//     console.log("reset button");
//     var duration = 0.3,
//         delay = 0.08;
//     TweenMax.to($reset, duration, { scaleY: 1.6, ease: Expo.easeOut });
//     TweenMax.to($reset, duration, { scaleX: 1.2, scaleY: 1, ease: Back.easeOut, delay: delay });
//     TweenMax.to($reset, duration * 1.25, { scaleX: 1, scaleY: 1, ease: Back.easeOut, delay: delay * 3 });
//     reload();
// });

//class defining a full 52 card deck and a card dealt as empty arrays
class Deck {
    constructor() {
        this.deck = [];
        this.dealt_cards = [];
    }
    resetDeck() { //generates the initial state of a deck

        let card = (suit, value) => { //function that will generate 1 card
            this.name = value + ' of ' + suit;
            this.suit = suit;
            this.value = value;

            //gives us the data object for one card
            return { name: this.name, suit: this.suit, value: this.value } //when the function is ran this returns the values of the variables for card in an object
        }

        //creates array variables for looping below to generate a full deck
        let values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
        let suits = ["Diamonds", "Clubs", "Spades", "Hearts"];

        for (let s = 0; s < suits.length; s++) { //loops through the values array //increments through values
            for (let v = 1; v < values.length; v++) { //loops through suit array //increments through suits
                this.deck.push(card(suits[s], values[v]))
            }
        }
    }

    showDeck() { //see all card objects    ......had (card, suits, values), is that right?
        if (this.deck.length == 0) {
            console.log("deck has not been generated") //error handling
        } else {
            for (let c = 1; c < this.deck.length; c++) {
                // let currentValue = this.deck[c].value;
                // if (currentValue == "J" || "Q" || "K") {
                // console.log(currentValue + " is the current value of card");
                // let newValue = 10;
                // this.deck.push(values)
                // console.log("changes value of " + this.deck[c].value + " to " + newValue);
            }
                // console.log(this.deck[c].value + " should end up equaling the new value of the card"); //printing the original deck to the console

            // console.log(this.deck.length); //printing # of cards in the deck (52)
        }
    }
    shuffle() {
        let cIndex = this.deck.length, tempVal, randomIndex

        while (cIndex !== 0) { //do not count the 0 index
            randomIndex = Math.floor(Math.random() * cIndex) //shuffles to new position within the indexes
            cIndex -= 1;
            tempVal = this.deck[cIndex];
            this.deck[cIndex] = this.deck[randomIndex];
            this.deck[randomIndex] = tempVal;
        }
    }

    deal() {
        // console.log("Deal Button");
        let dealt_card = this.deck.shift();
        this.dealt_cards.push(dealt_card); //pushes the array
        if (this.deck == 0) {
            console.log("deck is out of cards") //error handling
        } else {
            return dealt_card;
            console.log(dealt_card);
            // console.log(this.deck[c]); //printing the original deck to the console
            // console.log(this.deck.length); //printing # of cards in the deck
        }
    }

    updateDeck() {
        this.deck.unshift(this.dealt_cards, shift());
    }

    clearDeck() {
        this.deck = [];
    }
}

//creates our instance of a deck
deck = new Deck() //makes the instance of a new deck from the class defined above


deck.resetDeck(); //calls the resetDeck function
deck.showDeck(); //calls the showDeck function
// deck.shuffle(); //randomizes the cards in the original deck
deck.showDeck() //shows the shuffled deck


var $deal = document.querySelector('.deal');
$deal.addEventListener('click', function () {
    var duration = 0.3,
        delay = 0.08;
    TweenMax.to($deal, duration, { scaleY: 1.6, ease: Expo.easeOut });
    TweenMax.to($deal, duration, { scaleX: 1.2, scaleY: 1, ease: Back.easeOut, delay: delay });
    TweenMax.to($deal, duration * 1.25, { scaleX: 1, scaleY: 1, ease: Back.easeOut, delay: delay * 3 });
    console.log(deal());
});

// ****************************************************************************************************************************************************************************************************************


    // let cards = [
    //     {
    //         "suit": "hearts",
    //         "value": 2,
    //         "name": "Two",
    //         "image": "./images/2H.png"
    //     },
    //     {
    //         "suit": "hearts",
    //         "value": 3,
    //         "name": "Three",
    //         "image": "./images/3H.png"
    //     },
    //     {
    //         "suit": "hearts",
    //         "value": 4,
    //         "name": "Four",
    //         "image": "./images/4H.png"
    //     },
    //     {
    //         "suit": "hearts",
    //         "value": 5,
    //         "name": "Five",
    //         "image": "./images/5H.png"
    //     },
    //     {
    //         "suit": "hearts",
    //         "value": 6,
    //         "name": "Six",
    //         "image": "./images/6H.png"
    //     },
    //     {
    //         "suit": "hearts",
    //         "value": 7,
    //         "name": "Seven",
    //         "image": "./images/7H.png"
    //     },
    //     {
    //         "suit": "hearts",
    //         "value": 8,
    //         "name": "Eight",
    //         "image": "./images/8H.png"
    //     },
    //     {
    //         "suit": "hearts",
    //         "value": 9,
    //         "name": "Nine",
    //         "image": "./images/9H.png"
    //     },
    //     {
    //         "suit": "hearts",
    //         "value": 10,
    //         "name": "Ten",
    //         "image": "./images/10H.png"
    //     },
    //     {
    //         "suit": "hearts",
    //         "value": "10",
    //         "name": "Jack",
    //         "image": "./images/JH.png"
    //     },
    //     {
    //         "suit": "hearts",
    //         "value": "10",
    //         "name": "Queen",
    //         "image": "./images/QH.png"
    //     },
    //     {
    //         "suit": "hearts",
    //         "value": "10",
    //         "name": "King",
    //         "image": "./images/KH.png"
    //     },
    //     {
    //         "suit": "hearts",
    //         "value": "11",
    //         "name": "Ace",
    //         "image": "./images/AH.png"
    //     },
    //     {
    //         "suit": "diamonds",
    //         "value": 2,
    //         "name": "Two",
    //         "image": "./images/2D.png"
    //     },
    //     {
    //         "suit": "diamonds",
    //         "value": 3,
    //         "name": "Three",
    //         "image": "./images/3D.png"
    //     },
    //     {
    //         "suit": "diamonds",
    //         "value": 4,
    //         "name": "Four",
    //         "image": "./images/4D.png"
    //     },
    //     {
    //         "suit": "diamonds",
    //         "value": 5,
    //         "name": "Five",
    //         "image": "./images/5D.png"
    //     },
    //     {
    //         "suit": "diamonds",
    //         "value": 6,
    //         "name": "Six",
    //         "image": "./images/6D.png"
    //     },
    //     {
    //         "suit": "diamonds",
    //         "value": 7,
    //         "name": "Seven",
    //         "image": "./images/7D.png"
    //     },
    //     {
    //         "suit": "diamonds",
    //         "value": 8,
    //         "name": "Eight",
    //         "image": "./images/8D.png"
    //     },
    //     {
    //         "suit": "diamonds",
    //         "value": 9,
    //         "name": "Nine",
    //         "image": "./images/9D.png"
    //     },
    //     {
    //         "suit": "diamonds",
    //         "value": 10,
    //         "name": "Ten",
    //         "image": "./images/10D.png"
    //     },
    //     {
    //         "suit": "diamonds",
    //         "value": "10",
    //         "name": "Jack",
    //         "image": "./images/JD.png"
    //     },
    //     {
    //         "suit": "diamonds",
    //         "value": "10",
    //         "name": "Queen",
    //         "image": "./images/QD.png"
    //     },
    //     {
    //         "suit": "diamonds",
    //         "value": "10",
    //         "name": "King",
    //         "image": "./images/KD.png"
    //     },
    //     {
    //         "suit": "diamonds",
    //         "value": "11",
    //         "name": "Ace",
    //         "image": "./images/AD.png"
    //     },
    //     {
    //         "suit": "clubs",
    //         "value": 2,
    //         "name": "Two",
    //         "image": "./images/2C.png"
    //     },
    //     {
    //         "suit": "clubs",
    //         "value": 3,
    //         "name": "Three",
    //         "image": "./images/3C.png"
    //     },
    //     {
    //         "suit": "clubs",
    //         "value": 4,
    //         "name": "Four",
    //         "image": "./images/4C.png"
    //     },
    //     {
    //         "suit": "clubs",
    //         "value": 5,
    //         "name": "Five",
    //         "image": "./images/5C.png"
    //     },
    //     {
    //         "suit": "clubs",
    //         "value": 6,
    //         "name": "Six",
    //         "image": "./images/6C.png"
    //     },
    //     {
    //         "suit": "clubs",
    //         "value": 7,
    //         "name": "Seven",
    //         "image": "./images/7C.png"
    //     },
    //     {
    //         "suit": "clubs",
    //         "value": 8,
    //         "name": "Eight",
    //         "image": "./images/8C.png"
    //     },
    //     {
    //         "suit": "clubs",
    //         "value": 9,
    //         "name": "Nine",
    //         "image": "./images/9C.png"
    //     },
    //     {
    //         "suit": "clubs",
    //         "value": 10,
    //         "name": "Ten",
    //         "image": "./images/10C.png"
    //     },
    //     {
    //         "suit": "clubs",
    //         "value": "10",
    //         "name": "Jack",
    //         "image": "./images/JC.png"
    //     },
    //     {
    //         "suit": "clubs",
    //         "value": "10",
    //         "name": "Queen",
    //         "image": "./images/QC.png"
    //     },
    //     {
    //         "suit": "clubs",
    //         "value": "10",
    //         "name": "King",
    //         "image": "./images/KC.png"
    //     },
    //     {
    //         "suit": "clubs",
    //         "value": "11",
    //         "name": "Ace",
    //         "image": "./images/AC.png"
    //     },
    //     {
    //         "suit": "spades",
    //         "value": 2,
    //         "name": "Two",
    //         "image": "./images/2S.png"
    //     },
    //     {
    //         "suit": "spades",
    //         "value": 3,
    //         "name": "Three",
    //         "image": "./images/3S.png"
    //     },
    //     {
    //         "suit": "spades",
    //         "value": 4,
    //         "name": "Four",
    //         "image": "./images/4S.png"
    //     },
    //     {
    //         "suit": "spades",
    //         "value": 5,
    //         "name": "Five",
    //         "image": "./images/5S.png"
    //     },
    //     {
    //         "suit": "spades",
    //         "value": 6,
    //         "name": "Six",
    //         "image": "./images/6S.png"
    //     },
    //     {
    //         "suit": "spades",
    //         "value": 7,
    //         "name": "Seven",
    //         "image": "./images/7S.png"
    //     },
    //     {
    //         "suit": "spades",
    //         "value": 8,
    //         "name": "Eight",
    //         "image": "./images/8S.png"
    //     },
    //     {
    //         "suit": "spades",
    //         "value": 9,
    //         "name": "Nine",
    //         "image": "./images/9S.png"
    //     },
    //     {
    //         "suit": "spades",
    //         "value": 10,
    //         "name": "Ten",
    //         "image": "./images/10S.png"
    //     },
    //     {
    //         "suit": "spades",
    //         "value": "10",
    //         "name": "Jack",
    //         "image": "./images/JS.png"
    //     },
    //     {
    //         "suit": "spades",
    //         "value": "10",
    //         "name": "Queen",
    //         "image": "./images/QS.png"
    //     },
    //     {
    //         "suit": "spades",
    //         "value": "10",
    //         "name": "King",
    //         "image": "./images/KS.png"
    //     },
    //     {
    //         "suit": "spades",
    //         "value": "11",
    //         "name": "Ace",
    //         "image": "./images/AS.png"
    //     }
    // ];