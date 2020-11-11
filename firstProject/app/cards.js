console.log("The Game of War")
//https://www.youtube.com/watch?v=CLEd8Gph9hw  //tutorial source for help with the cards

//reset game button//
var $reset = document.querySelector('.reset');
$reset.addEventListener('click', function () {
    console.log("reset button");
    var duration = 0.3,
        delay = 0.08;
    TweenMax.to($reset, duration, { scaleY: 1.6, ease: Expo.easeOut });
    TweenMax.to($reset, duration, { scaleX: 1.2, scaleY: 1, ease: Back.easeOut, delay: delay });
    TweenMax.to($reset, duration * 1.25, { scaleX: 1, scaleY: 1, ease: Back.easeOut, delay: delay * 3 });
});

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
            this.image = "./images/" + this.value + this.suit + ".png";


            //gives us the data object for one card
            return { name: this.name, suit: this.suit, value: this.value, image: this.image } //when the function is ran this returns the values of the variables for card in an object
        }

        //creates array variables for looping below to generate a full deck
        let values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
        let suits = ["D", "C", "S", "H"];

        for (let s = 0; s < suits.length; s++) { //loops through the values array //increments through values
            for (let v = 1; v < values.length; v++) { //loops through suit array //increments through suits
                var images = [];
                var cardStart = "./images/" + this.value + this.suit + ".png"[0];
                var cardEnd = "./images/" + this.value + this.suit + ".png"[51];
                
            for (var i = cardStart; i < cardEnd+1; i++) {
                images.push(i);
                console.log(images);
            }
                this.deck.push(card(suits[s], values[v], images[i]));
            }
        }
 }


    showDeck() { //see all card objects
        if (this.deck.length == 0) {
            console.log("deck has not been generated") //error handling
        } else {
            for (let c = 0; c < this.deck.length; c++) { //c is the index of each card
                // console.log(this.deck[c]); //printing the original deck to the console
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
        // console.log("Deal Button");
        let dealt_card = this.deck.shift();
        this.dealt_cards.push(dealt_card); //pushes the array
        if (this.deck == 0) {
            console.log("deck is out of cards") //error handling
        } else {
            return dealt_card = { name: this.name, suit: this.suit, value: this.value, image: this.image } //when the function is ran this returns the values of the variables for card in an object
        }
        let p = 0;
        if(this.dealt_card.image == this.deck.image) {
        $("div.cardContainer").html(
            `<h2><img src="${this.dealt_card.image}"><h1>PLAYER 1<h1>`
        );
    }
    }
    // showCard() {
    //     console.log("showCard() is called");
    //     $.get(this.dealt_card, function () {
    //         console.log(deck.image);
    //     });
    // }

    updateDeck() {
        this.deck.unshift(this.dealt_cards, shift());
    }

    clearDeck() {
        this.deck = [];
    }
}

//creates our instance of a deck
deck = new Deck() //makes the instance of a new deck from the class defined above

var $deal = document.querySelector('.deal');
$deal.addEventListener('click', function () {
    var duration = 0.3,
        delay = 0.08;
    TweenMax.to($deal, duration, { scaleY: 1.6, ease: Expo.easeOut });
    TweenMax.to($deal, duration, { scaleX: 1.2, scaleY: 1, ease: Back.easeOut, delay: delay });
    TweenMax.to($deal, duration * 1.25, { scaleX: 1, scaleY: 1, ease: Back.easeOut, delay: delay * 3 });
    // console.log(resetDeck());
    deck.deal();
    console.log(deck.deal());
    // deck.showCard();
});

deck.resetDeck(); //calls the resetDeck function
deck.showDeck(); //calls the showDeck function
deck.shuffle(); //randomizes the cards in the original deck
