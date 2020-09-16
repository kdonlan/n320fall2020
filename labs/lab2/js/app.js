//base abstract class

class Instrument {
    constructor(name, family) {
        this.name = name;
        this.family = family;
}
    playInstrument() { //the verb to play the instrument that will print info to the console
        console.log("The " + this.name + " plays at " + this.loudness + " decibels and belongs to the " + this.family + " family.");
    }
}

//child class
class Clarinet extends Instrument {
    constructor(name, family, loudness) {
        super("Clarinet","Woodwind");
        this.loudness = 90;
        }
}
//child class
class Guitar extends Instrument {
    constructor(name, family, loudness) {
        super("Guitar", "Strings");
        this.loudness = 92;
        }
}
//child class
class Drum extends Instrument {
    constructor(name, family, loudness) {
        super("Drum", "Percussion");
        this.loudness = 120;
        }
}

let instruments = [];

instruments[0] = new Clarinet();
instruments[1] = new Guitar();
instruments[2] = new Drum();

instruments.forEach((instrument) => {
    instrument.playInstrument();
})