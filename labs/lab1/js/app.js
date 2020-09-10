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
    line(this.x,this.y,this.x,this.y + Math.floor(Math.random()*25)); //shape of the drop
    // console.log(this.createDrop);
    }

    // drop hits the ground (do not need?)
    // dropHit() {
    //   if (this.x == innerWidth*.8) {
    //     console.log("drop hit");
    //     console.log(rainDrop.dropHit);
    //   }
    // }
    }
    
    //creates the new occurances of rainDrop class and creates the array defined above
    for (let i=0; i < drops; i++) {
      dropsArray[i] = new rainDrop (
              Math.floor(Math.random()*innerWidth), //defines x
              Math.floor(Math.random()*-200, -100), //defines y
              5.66, //defines speed
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
      
    //myGround renders to the screen
    createGround() {
        noStroke();
        rect(this.xpos, this.ypos, this.rw, this.rh);
        fill(57, 184, 91);
        // console.log(this.createGround)
      }

    // drops hit ground position
    groundHit () {
      console.log(theGround);
      if(Ground.xpos == dropsArray.x) {
        console.log("drop hit");
        console.log(theGround.groundHit);
      }
    }

    //changes the ground color when 10 drops hit the ground  
    changeGround() {
      if (dropsArray <= 9) {
        noStroke();
        rect(this.xpos, this.ypos, this.rw, this.rh);
        fill(66, 245, 239);
    //     console.log("ground change");
    //     console.log(Ground.changeGround);
    //     console.log(rect)
    }
  }
  }
//create variable from Ground class called theGround
var theGround = new Ground(innerWidth*0,innerHeight*.8, innerWidth, innerHeight);
// console.log(theGround);




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
    theGround.groundHit();
    // theGround.changeGround();
  }
}