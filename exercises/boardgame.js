var pairArray = {};

class Board {
    constructor(rows, columns, x, y) {
        this.rows = rows; //6
        this.columns = columns; //7
        this.x = x;
        this.y = y;
        // this.width = width;
        // this.height = height;
    }

    checkPostion() {


        console.log("checks where chip lands")
    }
}

class Chip extends Board {
    constructor(color) {
        super(x,y);
        this.color = color;
}
}


var ourBoard = new Board (6, 7,  )

var player1Chip = new Chip ("black", )

