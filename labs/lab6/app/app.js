console.log("this is the Vue lab");

// Vue.component("book-view", {
//     props: ["book"],
//     template: "<ul><li>{{ book.title }} - by {{book.author}}</li><li><img class='image' src='{{book.image}}'/></li><li><button v-for='book in books' v-bind:book='book' v-if='instock'>Buy this Book</button></li></ul>"
// }),

Vue.component("book-view", {
    props: ["book"],
    template: "<ul><li>{{ book.title }} - by {{book.author}}</li></ul>"
}),


    item = new Vue({
        el: "#item",
        data: {
            message: "Top 3 New York Times Bestsellers",
            books: [
                { title: "The Return", author: "Nicholas Sparks", image: "./images/book1.jpg", instock: true },
                { title: "Battle Ground", author: "Jim Butcher", image: "/images/book2.jpg", instock: true },
                { title: "The Evening and the Morning", author: "Ken Follett", image: "./images/book3.jpg", instock: false }
            ],
            instock: true
        },
    })