console.log("The Game of War")
//https://www.youtube.com/watch?v=CLEd8Gph9hw  //tutorial source for help with the cards


//main start button//
var $button = document.querySelector('#button');
$button.addEventListener('click', function () {
    console.log("Start Button");
    var duration = 0.3,
        delay = 0.08;
    TweenMax.to($button, duration, { scaleY: 1.6, ease: Expo.easeOut });
    TweenMax.to($button, duration, { scaleX: 1.2, scaleY: 1, ease: Back.easeOut, delay: delay });
    TweenMax.to($button, duration * 1.25, { scaleX: 1, scaleY: 1, ease: Back.easeOut, delay: delay * 3 });
});


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
deck.shuffle(); //randomizes the cards in the original deck
deck.showDeck() //shows the shuffled deck


var $deal = document.querySelector('.deal');
$deal.addEventListener('click', function () {
    var duration = 0.3,
        delay = 0.08;
    TweenMax.to($deal, duration, { scaleY: 1.6, ease: Expo.easeOut });
    TweenMax.to($deal, duration, { scaleX: 1.2, scaleY: 1, ease: Back.easeOut, delay: delay });
    TweenMax.to($deal, duration * 1.25, { scaleX: 1, scaleY: 1, ease: Back.easeOut, delay: delay * 3 });
    console.log(deck.deal());
   
});
    


// Vue.component("book-view", {
    //     props: ["book"],
    //     template: "<div class='wrapper'><ul><li>{{ book.title }} - by {{book.author}}</li><img :src='book.image' class ='image'></li><li><button v-if='book.instock'>Buy This Book</button></li></ul></div>"
    // })


    // var item = new Vue({
    //         el: "#item",
    //         data: {
    //             message: "Top 3 New York Times Bestsellers",
    //             books: [
    //                 { id: 1, title: "The Return", author: "Nicholas Sparks", image: "./images/book1.jpg", instock: true },
    //                 { id: 2, title: "Battle Ground", author: "Jim Butcher", image: "./images/book2.jpg", instock: false },
    //                 { id: 3, title: "The Evening and the Morning", author: "Ken Follett", image: "./images/book3.jpg", instock: true }
    //             ],
    //         },
    //     })