class Drop {
    constructor(cx,cy,radius, color, speed, number) {
        this.x = cx;
        this.y = cy;
        this.radius = radius;
        this.color = color;
        this.speed = speed;
        this.number = number;
    }

// class Ground {
//       constructor(gx, gy, width, height) {
//         this.gx = gx;
//         this.gy = gy;
//         this.width = width;
//         this.height = height;
//       }
//     }

    update() {
        this.y = this.y + this.speed; 
        this.speed = this.speed + .1;
        circle(this.x, this.y, this.radius);
        fill(this.color); 
    }
}

var myDrops = [];
myDrops[0] = new Drop(Math.random, 10, 20, [174, 91, 252],2 + Math.random() * 2), Math.random ;
myDrops[1] = new Drop(250, 10, 20, [174, 91, 252],2 + Math.random() * 2), Math.random;
myDrops[2] = new Drop(300, 10, 20, [174, 91, 252],2 + Math.random() * 2), Math.random;
myDrops[3] = new Drop(175, 10, 20, [174, 91, 252],2 + Math.random() * 2), Math.random;
myDrops[4] = new Drop(220, 10, 20, [174, 91, 252],2 + Math.random() * 2), Math.random;
myDrops[5] = new Drop(166, 10, 20, [174, 91, 252],2 + Math.random() * 2), Math.random;
myDrops[6] = new Drop(100, 10, 20, [174, 91, 252],2 + Math.random() * 2), Math.random;
myDrops[7] = new Drop(445, 10, 20, [174, 91, 252],2 + Math.random() * 2), Math.random;
myDrops[8] = new Drop(545, 10, 20, [174, 91, 252],2 + Math.random() * 2), Math.random;
myDrops[9] = new Drop(222, 10, 20, [174, 91, 252],2 + Math.random() * 2), Math.random;
myDrops[10] = new Drop(533, 10, 20, [174, 91, 252],2 + Math.random() * 2), Math.random;
myDrops[11] = new Drop(664, 10, 20, [174, 91, 252],2 + Math.random() * 2), Math.random;
myDrops[12] = new Drop(765, 10, 20, [174, 91, 252],2 + Math.random() * 2), Math.random;
myDrops[13] = new Drop(462, 10, 20, [174, 91, 252],2 + Math.random() * 2), Math.random;
myDrops[14] = new Drop(333, 10, 20, [174, 91, 252],2 + Math.random() * 2), Math.random;
myDrops[15] = new Drop(433, 10, 20, [174, 91, 252],2 + Math.random() * 2), Math.random;
myDrops[16] = new Drop(228, 10, 20, [174, 91, 252],2 + Math.random() * 2), Math.random;
myDrops[17] = new Drop(339, 10, 20, [174, 91, 252],2 + Math.random() * 2), Math.random;
myDrops[18] = new Drop(557, 10, 20, [174, 91, 252],2 + Math.random() * 2), Math.random;




function setup() {
    createCanvas(800,600);
}

function draw() {
    background(71, 13, 77);
    myDrops[0].update()
    myDrops[1].update()
    myDrops[2].update()
    myDrops[3].update()
    myDrops[4].update()
    myDrops[5].update()
    myDrops[6].update()
    myDrops[7].update()
    myDrops[8].update()
    myDrops[9].update()
    myDrops[10].update()
    myDrops[11].update()
    myDrops[12].update()
    myDrops[13].update()
    myDrops[14].update()
    myDrops[15].update()
    myDrops[16].update()
    myDrops[17].update()
    myDrops[18].update()
}



// class Module {
//     constructor(xOff, yOff, x, y, speed, unit) {
//       this.xOff = xOff;
//       this.yOff = yOff;
//       this.x = x;
//       this.y = y;
//       this.speed = speed;
//       this.unit = unit;
//       this.xDir = 1100;
//       this.yDir = 1;
//     }
  
//     // Custom method for updating the variables
    // update() {
    //   this.y = this.y + random(this.speed) * this.yDir;
    //   if (this.x == this.unit) {
    //     this.yDir *= -1;
    //     this.x = this.x + 1 * this.xDir;
    //     this.y = this.y + 1;
    //   }
    //   if (this.x >= this.unit || this.x <= 0) {
    //     this.xDir *= -1;
    //     this.x = this.x + 1 * this.xDir;
    //   }
    // }
  
//     // Custom method for drawing the object
//     draw() {
//       fill(10, 69, 163);
//       ellipse(this.xOff + this.x, this.yOff + this.y, 6, 6);
//     }
//   }
  
//   let unit = 22;
//   let count;
//   let mods = [];
// //   let speed = 10/60;
  
//   function setup() {
//     createCanvas(720, 360);
//     noStroke();
//     let wideCount = width / unit;
//     let highCount = height / unit;
//     count = wideCount * highCount;
  
//     let index = 0;
//     for (let y = 0; y < highCount; y++) {
//       for (let x = 0; x < wideCount; x++) {
//         mods[index++] = new Module(
//           x * unit,
//           y * unit,
//           unit / 2,
//           unit / 2,
//           random(0.05, 0.8),
//           unit
//         );
//       }
//     }
//   }
  
//   function draw() {
//     background(0);
//     for (let i = 0; i < count; i++) {
//       mods[i].update();
//       mods[i].draw();
//     }
//   }
  
