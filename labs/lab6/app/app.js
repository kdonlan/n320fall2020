
Vue.component("book-view", {
    props: ["book"],
    template: "<div class='wrapper'><ul><li>{{ book.title }} - by {{book.author}}</li><img :src='book.image' class ='image'></li><li><button v-if='book.instock'>Buy This Book</button></li></ul></div>"
})


var item = new Vue({
        el: "#item",
        data: {
            message: "Top 3 New York Times Bestsellers",
            books: [
                { id: 1, title: "The Return", author: "Nicholas Sparks", image: "./images/book1.jpg", instock: true },
                { id: 2, title: "Battle Ground", author: "Jim Butcher", image: "./images/book2.jpg", instock: false },
                { id: 3, title: "The Evening and the Morning", author: "Ken Follett", image: "./images/book3.jpg", instock: true }
            ],
        },
    })
