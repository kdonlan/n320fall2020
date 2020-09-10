//name of the array I'm creating
let dropsArray = [];

//sets the number of drops in the array
let drops = 200;

// *******************************************************  rainDrop  *******************************************************

//class for a one drop
class rainDrop {
    constructor(x,y,speed) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        // console.log(rainDrop); 
    }
    
    // drop falls
    fallingDrop() {
    this.y = this.y + this.speed*2 ; //rate of speed
    if (this.y >=  innerHeight) { //randomizes the starting position of the drop falling
    this.y = Math.floor(Math.random()*-400, -50);
    // console.log(this.fallingDrop);
    }
    }
      
    // drop renders on the screen
    createDrop() {
    stroke(255,255,255); //drop color
    strokeWeight(2.75); //drop width
    line(this.x,this.y,this.x,this.y + Math.floor(Math.random()*25)); //shape of the drop
    // console.log(this.createDrop);
    }

    // drop hits the ground
    // dropHit() {
    //   if (this.y >= innerHeight*.8) {
    //   }
    // }
  }
    
    //creates the new occurances of rainDrop class and creates the array defined above
    for (let i=0; i < drops; i++) {
      dropsArray[i] = new rainDrop (
              Math.floor(Math.random()*innerWidth), //defines x
              Math.floor(Math.random()*innerHeight), //defines y
              8, //defines speed
            );
    }
    // console.log(dropsArray)

// *******************************************************  GROUND  *******************************************************


    class Ground {
      constructor (xpos, ypos, rw, rh, fillColor) {
        this.xpos = xpos; //x position of rectangle
        this.ypos = ypos; //y position of rectangle
        this.rw = rw; //rect width
        this.rh = rh; //rect height
        this.fillColor = fillColor //sets the ground color
      }
      
    //myGround renders to the screen
    createGround() {
        noStroke();
        rect(this.xpos, this.ypos, this.rw, this.rh);
        fill(this.fillColor);
      }

    // changes the ground color when 10 drops hit the ground  (don't need, I don't think)
    changeGround() {
      var hundredPercent = 100;
      var fivePercent = hundredPercent * .05;
      for (let i=0; i < 255; i++) {
        theGround.fillColor = "rgb(0, 0, 255, fivePercent)";
        console.log(theGround.fillColor);
      }
    }
  }
//create variable from Ground class called theGround
var theGround = new Ground(innerWidth*0,innerHeight*.8, innerWidth, innerHeight, "rgb(0, 0, 255)");
console.log(theGround);
console.log(theGround.fillColor);




//sets the width/height of the canvas
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

//puts the objects on the page
function draw() {
    background(52, 122, 235); //blue background
    
    // invokes the functions defined in rainDrop above
    for (let i=0; i < dropsArray.length; i++) {
    dropsArray[i].fallingDrop();
    dropsArray[i].createDrop();

    // function for single drop
    // myDrop.fallingDrop();
    // myDrop.createDrop();

    //invokes the functions defined in ground above
    theGround.createGround();
    // theGround.changeGround();
    // theGround.changeGround();

  }
}