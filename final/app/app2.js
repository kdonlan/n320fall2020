let players = [];

//describes the player class
class Player {
    constructor(firstName, city, game) {
        this.firstName = firstName;
        this.city = city;
        this.game = game;
        // this.story = story; //need to add story in constructor for flip
    }
    renderPlayerInfo() {
            return player = new Player().append(
                `<h2>${this.firstName}</h2>
                <h3 style="font-size: 1rem;margin-top:10px; text-align: left;">${this.city}, IN</h3>
                <p>${this.game}</p>`
            )
        }
    }

fetch("data/data.json")
    .then(response => {
        return response.json();
    })
    .then((data) => {

    for ( i= 0; i<= 4; i++) {
        let players = new Player([data[i]]);
        console.log(data[i]);
        let player = new Player(data.firstName, data.city, data.game);
        console.log(this.player);
}

// players.forEach(player.renderPlayerInfo());
//         console.log(data[i]);
    })