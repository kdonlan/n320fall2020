// //note you can use for full window canvas
// // createCanvas(window.innerWidth, window.innerHeight);

// // let index=0;
// let number = 5;

// class rainDrop {
//     constructor(x,y,speed) {
//         this.x = x;
//         this.y = y;
//         this.speed = speed;
//         console.log(rainDrop);
//     }

//     fallingDrop() {
//       this.y = this.y + this.speed;
//     }
// }


// // var myDrop = new rainDrop(800/2, 0, 5);
// // console.log(myDrop);

// let dropsArray = [];

// function setup() {
//   createCanvas(800,600);
//   for (let i=0; i = number; i++) {
//       dropsArray[i] = new rainDrop (
//       Math.floor(Math.random()*800),
//       Math.floor(Math.random()*-200, -100),
//       5,
//     );
// }
// }

// function draw() {
//     background(52, 122, 235);
//     for (let i=0; i < number; i++) {
//       dropsArray[i].createDrop;
//       dropsArray[i].fallingDrop;
//     };
// } 

//note you can use for full window canvas
// createCanvas(window.innerWidth, window.innerHeight);

let dropsArray = [];
let drops = 150;

class rainDrop {
    constructor(x,y,speed) {
        this.x = x;
        this.y = y;
        this.speed = speed;
    }
    
    // drop falls
    fallingDrop() {
    this.y = this.y + this.speed*5;
    if (this.y >=  600) {
    this.y = Math.floor(Math.random()*-200, -100);
    }
    }
      
    // drop renders on the screen
    createDrop() {
    stroke(255,255,255);
    strokeWeight(2);
    line(this.x,this.y,this.x,this.y + Math.floor(Math.random()*10, 15));
    }
    }

    class Ground {
      constructor (xpos, ypos, rw, rh) {
        this.xpos = xpos;
        this.ypos = ypos;
        this.rw = rw;
        this.rh = rh;
        // console.log(Ground);
      }
    }

//create ground
function updateGround() {
        fill(0);
        rect() == rect(new Ground(600,200,800, 200));
        
    }

    function showGround() {
      updateGround();
    }
          
    let myGround = new Ground(600,200, 800, 200);
    
    for (let i=0; i <= drops; i++) {
      dropsArray[i] = new rainDrop (
              Math.floor(Math.random()*800),
              Math.floor(Math.random()*-200, -100),
              5,
            );
    }
    dropsArray.push;
    // console.log(dropsArray)


var myDrop = new rainDrop(800/2, 0, 5);
// console.log(myDrop);

function setup() {
  createCanvas(800,600);
}

function draw() {
    background(52, 122, 235);
  
    for (let i=0; i < dropsArray.length; i++) {
    
      //function for drop array

    
    updateGround();
    showGround();
    dropsArray[i].fallingDrop();
    dropsArray[i].createDrop();

    

//     // function for single drop
//     myDrop.fallingDrop();
//     myDrop.createDrop();
}
}