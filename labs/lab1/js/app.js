//name of the array I'm creating
let dropsArray = [];

//sets the number of drops in the array
let drops = 170;

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
    this.y = this.y + this.speed*5; //rate of speed
    if (this.y >=  innerHeight) { //randomizes the start position of the drop falling
    this.y = Math.floor(Math.random()*-400, -50);
    // console.log(this.fallingDrop);
    }
    }
      
    // drop renders on the screen
    createDrop() {
    stroke(255,255,255); //drop color
    strokeWeight(2.75); //drop width
    line(this.x,this.y,this.x,this.y + Math.floor(Math.random()*15,25)); //shape of the drop
    // console.log(this.createDrop);
    }
    }
    
    //creates the new occurances of rainDrop class and creates the array defined above
    for (let i=0; i < drops; i++) {
      dropsArray[i] = new rainDrop (
              Math.floor(Math.random()*innerWidth), //defines x
              Math.floor(Math.random()*-200, -100), //defines y
              5, //defines speed
            );
    }
    // console.log(dropsArray)


    class Ground {
      constructor (xpos, ypos, rw, rh) {
        this.xpos = xpos; //x position of rectangle
        this.ypos = ypos; //y position of rectangle
        this.rw = rw; //rect width
        this.rh = rh; //rect height
      }

    createGround() {
        rect(this.xpos, this.ypos, this.rw, this.rh);
        fill(57, 184, 91);
        // console.log(this.createGround)
      }
    }

//create variable from Ground class called theGround
var theGround = new Ground(innerWidth*.2,innerHeight*.2, 800, 200);
console.log(theGround);

//sets the width/height of the canvas
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

//puts the objects on the page
function draw() {
    background(52, 122, 235); //blue background
  
    for (let i=0; i < dropsArray.length; i++) {
    
    // invokes the functions defined in rainDrop above
    dropsArray[i].fallingDrop();
    dropsArray[i].createDrop();

    //invokes the functions defined in ground above
    theGround.createGround();

    

//     // function for single drop
//     myDrop.fallingDrop();
//     myDrop.createDrop();
}
}