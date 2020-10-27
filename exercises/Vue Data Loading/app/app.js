// Vue.component("coffee-view", {
//   props: ["coffee"],
//   template: "<li>{{coffee.name}}  🤓 : ${{coffee.price}}</li>"
// })

// let app = new Vue({
//   el: "#app",
//   data: {
//     purchases: 0,
//     message: "Types of Coffee",
//     seeit: false,
//     coffees: [ {id: 0, price: 5, name:"Pumpkin Spice", instock:true}, {id: 1, price: 10, name: "Dark Roast", instock:false}, {id: 2, price:15, name:"Folgers"} ]
//   },
//   methods: {
//     buyCoffee: function() {
//       console.log("It works");
//       this.purchases += 1; //for data binding
//     }
//   }
// });



// // let app = new  Vue ({
// //     el: "#app"
// // })


// // console.log('time selector');

// // {{message}}
 
// // var clock = new Vue ({
// //     el: '#clock',
// //     data: {message: '10:29pm'}
// //   })

// // var today = new Date();var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// console.log ("this is the data loading vue practice")

axios.get('data/data.json')
  .then(function (response) {
    console.log(response);
  });

fetch("data/data.json")
  .then(response => {
    return response.json();
})
  .then((data) => {
    console.log(data);
    // console.log(data.maker)
    // console.log(data.types)
    // console.log(data.employees)
  })