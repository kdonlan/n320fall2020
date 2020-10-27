console.log("Blackjack Game")
//https://www.youtube.com/watch?v=CLEd8Gph9hw  //tutorial source for help with the cards

//class defining a full 52 card deck and a card dealt as empty arrays
class Deck {
    constructor() {
        this.deck = [];
        this.dealt_cards = [];
    }
    resetDeck() { //generates the initial state of a deck

        console.log("resetDeck - new full deck");

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

    showDeck() { //see all card objects
        if (this.deck.length == 0) {
            console.log("deck has not been generated") //error handling
        } else {
            for (let c = 0; c < this.deck.length; c++) { //c is the index of each card
                console.log(this.deck[c]); //printing the original deck to the console
                // console.log(this.deck.length); //printing # of cards in the deck
            }
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
        let dealt_card = this.deck.shift();
        this.dealt_cards.push(dealt_card); //pushes the array
        return dealt_card;
    }
    replace() {
        this.deck.unshift(this.dealt_cards, shift());
    }

    clearDeck() {
        this.deck = [];
    }
}

deck = new Deck() //makes the instance of a new deck from the class defined above
deck.resetDeck(); //calls the resetDeck function
// deck.showDeck(); //calls the showDeck function
deck.shuffle(); //randomizes the cards in the original deck
// deck.showDeck() //shows the shuffled deck

console.log(deck.deal());