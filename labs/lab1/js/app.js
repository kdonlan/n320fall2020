//note you can use for full window canvas
// createCanvas(window.innerWidth, window.innerHeight);

let dropsArray = [];
let index=0;
let drops = 150;

function setup() {
  createCanvas(800,600);
}

class rainDrop {
    constructor(x,y,speed) {
        this.x = x;
        this.y = y;
        this.speed = speed;
    }
    
    // drop falls
    fallingDrop() {
    this.y = this.y + this.speed;
    if (this.y < 600) {
    this.y = Math.floor(Math.random()*-200, -100);
    }
    console.log("drops falling!")
    console.log(rainDrop.fallingDrop);
    }
      
    // drop renders on the screen
    createDrop() {
    stroke(255,255,255);
    strokeWeight(2);
    line(this.x,this.y,this.x,this.y + 25);
    console.log("drop created!"); 
    console.log(rainDrop.createDrop); 
    }
    }
    
    for (let i=0; i <= drops; i++) {
        dropsArray[index++] = new rainDrop(
                Math.floor(Math.random()*800),
                Math.floor(Math.random()*-200, -100),
                5,
              );
    }
    dropsArray.push;
    console.log(dropsArray)


var myDrop = new rainDrop(800/2, 0, 5);
// console.log(myDrop);



function draw() {
    background(52, 122, 235);
  
    for (let i=0; i <= dropsArray.length; i++) {
    
      //function for drop array

    
    dropsArray[i].fallingDrop();
    console.log("drops are falling");
        dropsArray[i].createDrop();
    console.log("drops are created");
    

//     // function for single drop
//     myDrop.fallingDrop();
//     myDrop.createDrop();
}
}
