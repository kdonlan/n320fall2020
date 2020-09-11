class Cloud {
    constructor(type, milesSpeed) {
        this.height = 4;
        this.type = type;
        this.speed = milesSpeed * 1.60934;
    }
}

class Altocumulus extends Cloud {
constructor() {
    super("Altocumulus", 2);
    
    this.fluffiness = 100;
}
}

class Cirrus extends Cloud {
constructor() {
    super("Cirrus", 2);
    
    this.mileSize = 100;
}
}


let c = new Cirrus("Cirrus");
// console.log(c);

let c2 = new Altocumulus("Altocumulus");
// console.log(c2);

// let apples = [
//     {size: 100, color: ""},
//     {size: 100, color: ""},
//     {size: 100, color: ""},
// ];


class Apple {
    constructor (size, color) {
        this.color = color;
        this.size = size;
    }
}
let apples = [
    new Apple (100, "#44885"),
    new Apple (100, "#44885"),
    new Apple (100, "#44885")
];

console.log(apples);


// let appleSizes = [150, 99, 42, 3, 1, 10];

for (let i = 0; i < appleSizes.length; i++) {
    // console.log(appleSizes[i]);
}

appleSizes.forEach(function(size) {
// console.log(size);
})

// appleSizes.forEach((size) => {
//     console.log(size);
//     circle(50, 50, size);
//     })

function setup() {
    createCanvas(400,300);
    background(120);
}

function draw() {
    myDrop.forEach((rainDrop, index) => {
        fill(apple.color);
        myDrops[index] += myDrops + Math.sin(frameCount/10) * 3;
        circle(50, 50, apple.size);
        })
}