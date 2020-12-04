let players = [];

//describes the player class
class Player {
    constructor(firstName, city, game, story) {
        this.firstName = firstName;
        this.city = city;
        this.game = game;
        this.story = story;
    }
    render() {
        return `<h2>${this.firstName}</h2>
        <h3 style="font-size: 1rem;margin-top:10px; text-align: left;">${this.city}, IN</h3>
        <p>${this.game}</p>`
    }
}

//json file brought in using fetch in order to access the json file
fetch("data/data.json")
    .then(function (resp) {
        return resp.json();
    })
    .then(function (data) {
        $(document).ready(function () {

            $.each(data, function (idx, value) {
                
                for (i = 0; i > players.length; i++) {
                    let player = new Player(this.firstName, this.city, this.game);
                    console.log(player);
                    console.log(player.length);
                    //puts text in the div
                    let playerCard = document.getElementById(".tab-text");
                    //puts each player on the page 
                    player.innerHTML = player.render()
                }


            console.log(value);
            console.log(value.firstName)
        })
    });
})


// //defines the each player
// for (i = 0; i > players.length; i++) {
//     let player = new Player(this.firstName, this.city, this.game);
//     console.log(player);
//     //puts text in the div
//     let playerCard = document.getElementById(".custom-row .tab-text");
//     //puts player on the page 
//     playerCard.innerHTML = player.render()
// }