//name of the arrays I'm creating
let dropsArray = [];
let colorArray = [];

//sets the number of drops
let drops = 275;

//blue color start value
let blueValue = 20;

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
    strokeWeight(2); //drop width
    line(this.x,this.y,this.x,this.y + Math.floor(Math.random()*30, 75)); //shape of the drop
    // console.log(this.createDrop);
    }
  }
    
    //creates the new occurances of rainDrop class and creates the array defined above
    for (let i=0; i < drops; i++) {
      dropsArray[i] = new rainDrop (
              Math.floor(Math.random()*innerWidth), //defines x
              Math.floor(Math.random()*innerHeight), //defines y
              18, //defines speed
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
      
    //Ground renders to the screen
    createGround() {
        noStroke();
        rect(this.xpos, this.ypos, this.rw, this.rh);
        fill(this.fillColor);
      }

    changeGround() {
        var blue = 255;
        var fivePerc = blue * .05;
        for (let i=0; i < 255 && i !== 0; i++) {
          Ground.fillColor = "rgb(0, 0, " + 255 - fivePerc + ")";
        }
        // console.log(this.fillColor);
      }
  }

//create variable from Ground class called theGround for "1" ground occurance
// var theGround = new Ground(innerWidth*0,innerHeight*.8, innerWidth, innerHeight, "rgb(0, 255, 55)");
// console.log(theGround);
// console.log(theGround.fillColor);

// creates the new occurances of ground class and creates the array defined above
for (let i=0; i < 20; i++) { //blue is 55
  colorArray[i] = new Ground (innerWidth*0,innerHeight*.8, innerWidth, innerHeight, "rgb(80, 202,55)");
  // colorArray[i] = new Ground (innerWidth*0,innerHeight*.8, innerWidth, innerHeight, "rgb(80, 202," + this.fillColor + ")");
  }


// *******************************************************  SET-UP CANVAS  *******************************************************

//sets the width/height of the canvas
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

//puts the objects on the page
function draw() {
    background(52, 122, 235); //blue sky background
  
    // invokes the functions defined in rainDrop class above
    for (let i=0; i < dropsArray.length; i++) {
    dropsArray[i].fallingDrop();
    dropsArray[i].createDrop();

    // invokes the function define in the Ground class above
    for (let i=0; i < colorArray.length; i++) {
      colorArray[i].changeGround();
      colorArray[i].createGround();        
    }
    
    // function for single drop
    // myDrop.fallingDrop();
    // myDrop.createDrop();

    //invokes the functions defined in ground above (for "1" ground)
    // theGround.createGround();
  }
}