//base abstract class

class Instrument {
    constructor(loudness,family) {
    this.loudness = loudness;
    this.family = family;
}
    playInstrument() { //the verb to play the instrument that will print info to the console
        console.log("The " + instruments + " plays at " + this.loudness + " decibels and belongs to the " + this.family + " family.");
    }
}

//child class
class Clarinet extends Instrument {
    constructor() {
        super(90, "Woodwind");
        }
}
//child class
class Guitar extends Instrument {
    constructor() {
        super(81, "String");
        }
}
//child class
class Drum extends Instrument {
    constructor(name) {
        this.name = "Clarinet";
        super(120, "Percussion");
        }
}

let instruments = [];

instruments[0] = new Clarinet();
instruments[1] = new Guitar();
instruments[2] = new Drum();

instruments.forEach((instrument) => {
    instrument.playInstrument();
})