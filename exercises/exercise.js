//Encapsulation Example
class Odds {
  constructor() {
    this.gameOdds = gameOdds;
  }
}

setOdds(gameOddsNew) {
  if(newOdds < 1) {
    this.odds = gameOddsNew
  } else
 {
   console.log("These cannot be correct game odds. Try again.")
 }
}








//Association

class Kid {
  constructor(name) {
   this.name = name;
  }

  swims(kickboard) {
    kickboard.kicks(this);
  }
}

class Kickboard {
  kicks(aKid) {
    console.log(aKid.name + " swims with his kickboard!");
  }
}

let aKid = new Kid("Billy");
let aKickboard = new Kickboard();

aKid.swims(aKickboard);









//review of classes

// class Opinion {
//     constructor() {
//      this.type = "An";
//     }
//     method() {
//      this.type = "Validated";
//     }
//   }

//   var myOpinion = new Opinion ("This is what I think")
//   myOpinion.method();
  











// //adding a method to an object
// // var myHouse = {
// //     street: "River Road",
// //     number: 7898,
// //     zipcode: 46240,
// //     show:function (){
// //         console.log("My house address is " + this.number + " " + this.street + " in Indianapolis, IN.");
// //     },        
        
// //     }
// //     myHouse.show();

// // defining a class
//     class House {
//         constructor(street, number, zipcode) {
//             this.street = street;
//             this.number = number;
//             this.zipcode = zipcode;
//         }
//         show() {
//             console.log("My house address is " + this.number + " " + this.street + " in Indianapolis, IN.");
//         }
//     }

//     // creating a new instance of a class / the "new" keyword runs the constructor above
//     var myHouse = new House("Elm",123,44578);
    
//     // invoke the class method
//     myHouse.show();

// //inheritance - define
// // class Building {
// //     constructor(street, number, zipcode) {
// //         this.street = street;
// //         this.number = number;
// //         this.zipcode = zipcode;
// //     }
// // }

// //extending a class
// // class House extends Building {
// //     constructor(street,number,zipcode) {
// //         super(street,number,zipcode);
// //         this.kind = "House;"
// //     }
// //     show() {
// //         console.log(this.street + "St is such a nice place to live.");
// //     }
// // }

// // console.log(House);
