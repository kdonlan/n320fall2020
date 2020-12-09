
//describes the player class
class Player {
    constructor(firstName, city, game) { //need to add story in constructor for flip eventually
        this.firstName = firstName;
        this.city = city;
        this.game = game;
        // this.story = story; 
    }
    //puts the player's record on the page within the div
    renderPlayerInfo() {
        if(i = 0, i <= data.length, i++)
            players.forEach((player) => {
            return player = $(".custom-row .tab-text").append(
                `<div><h2>${this.firstName}</h2>
                    <h3 style="font-size: 1rem;margin-top:10px; text-align: left;">${this.city}, IN</h3>
                    <p>${this.game}</p></div>`
            )

            })
        
}
}

    fetch("data/data.json")
    .then(response => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        $(document).ready(function () {
            // let player = new Player(this.firstName.value, this.city.value, this.game.value);
            let data = new Player(firstName.value, data.city.value, data.game.value);

            this.player.renderPlayerInfo();  
            })
        })







    // for (i = 0; i <= players.length; i++) {
    //     console.log(this.value);
    //     console.log(this.value.firstName);
    //     let player = new Player();
    //     players.forEach((player) => {})
    //     $(".custom-row .tab-text").append(
    //         `<h2>${value.firstName}</h2>
    //         <h3 style="font-size: 1rem;margin-top:10px; text-align: left;">${this.value.city}, IN</h3>
    //         <p>${value.game}</p>
    //         <div class="icons-block"> <a href="#" class="social-icon-1"><i class="fa fa-facebook-official"></i></a> <a href="#" class="social-icon-2"><i class="fa fa-twitter-square"></i></a> <a href="#" class="social-icon-3"><i class="fa fa-youtube-square"></i></a> </div>`);
    //     }