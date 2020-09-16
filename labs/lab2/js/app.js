//base abstract class

class Instrument {
    constructor(loudness) {
        this.loudness = loudness;
}
    playInstrument() { //the verb to play the instrument that will print info to the console
        console.log("The " + this.name + " plays at " + this.loudness + " decibels and belongs to the " + this.family + " family.");
    }
}

//child class
class Clarinet extends Instrument {
    constructor(name, family) {
        super("90");
        this.name = "Clarinet";
        this.family = "Woodwind";
        }
}
//child class
class Guitar extends Instrument {
    constructor(name, family) {
        super("81");
        this.name = "Guitar";
        this.family = "Strings";
        }
}
//child class
class Drum extends Instrument {
    constructor(name, family) {
        super("120");
        this.name = "Drum";
        this.family = "Percussion";
        }
}

let instruments = [];

instruments[0] = new Clarinet();
instruments[1] = new Guitar();
instruments[2] = new Drum();

instruments.forEach((instrument) => {
    instrument.playInstrument();
})