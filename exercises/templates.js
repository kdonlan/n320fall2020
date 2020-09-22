// var item = {
//     firstname: "Kimberly",
//     lastname: "Donlan",
//     age: 25,
//     carMake: "Ford",
//     carModel: "Edge",
//     image: "/exercises/images/profile pic.jpg"
// }
// console.log(item);
// var temp = document.getElementById("container");
// var clone = temp.content.cloneNode(true);
// console.log(clone);
// clone.querySelector(".image").setAttribute("src", item.image);
// //puts the firstname in the div .name
// clone.querySelector(".name").innerHTML = item.firstname;

// //puts the lastname in the div .name ***THIS REPLACES ANYTHING ELSE IN THE DIV ALREADY
// // clone.querySelector(".name").innerHTML = item.lastname;

// clone.querySelector(".car").innerHTML = item.carMake;
// document.body.appendChild(clone);



//String Templates JavaScript

// let supplies = {
//     notebook: "3-Subject",
//     pencil:"No. 2"
// }

// let templateString = `<h2>Our Supplies</h2><ol><li>${supplies.notebook}</li><li>${supplies.pencil}`;
// console.log(templateString);
// let newContainer = document.createElement("div");
// newContainer.innerHTML = templateString;

// document.body.appendChild(newContainer);


//implementing a simple application

class virtualGlass {
    constructor(name) {
        this.name = name;
        this.water = .2;
        this.empty = 0;
    }

    render() {
        return `<div><h2>${this.name}</h2></div>
        <div><p>Full: ${this.water}</p></div>
        <div><p>Half: ${this.empty}</p></div>`;
    }

    pour() {
        this.water ++;
    }
}

let myVirtualGlass = new virtualGlass("Glassy");
let glassDiv = document.getElementById("glassDiv");
glassDiv.innerHTML = myVirtualGlass.render();

function pourWater() {
    myVirtualGlass.pour();
    glassDiv.innerHTML = myVirtualGlass.render();
}


// class VirtualPet {
//       constructor(name) {
//         this.name = name;
//         this.hunger = 50;
//         this.energy = 60;
//       }
//       render() {
//         return `
//           <div>${this.name}</div>
//           <div>Hunger: ${this.hunger}</div>
//           <div>Energy: ${this.energy}</div>
//         `;
//       }
//       feed() {
//         this.hunger --;
//       }
//     }

//     let myPet = new VirtualPet("Gidget");
// let petDiv = document.getElementById("petDiv");
// petDiv.innerHTML = myPet.render();
// function feedPet() {
//   myPet.feed();
//   petDiv.innerHTML = myPet.render();
// }

    