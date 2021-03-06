//check that my script is linked
console.log("file is working");

$(document).ready(function() {
    console.log("on document ready");
    //takes .4 seconds to transition "from" to position x of 800 //delay of the first animation for .2 seconds, then the HL logo in half second
    // TweenLite.from("#image", 1.25, {
    //     duration: .5,
    //     x: 1200,
    //     alpha: 0,
    //     delay: .2
    // });
    //animates logo
    TweenLite.from("#logo", 1, {
        duration: .5,
        x: -800,
        alpha: 0
    });
    //animates headline
    TweenLite.from("#imageHeadline", .75, {
        duration: .5,
        y: -800,
        alpha: 0,
        delay: .2
    });
    //animates sub-headline copy
    TweenLite.from("#copy", 1, {
        duration: .5,
        y: 800,
        alpha: 0,
        delay: .66
    })



    ////// menu script ////////// on-click menu icon
    var items = document.querySelectorAll('.circle a');
    console.log("this is here");
    //gets reference to each anchor tag icon
    for (var i = 0, l = items.length; i < l; i++) {

    }
    //all of the anchor tags from above are shown when the button with .menu-button is clicked, i.e. "target"
    //the way it is shown is by the css styles defined in main.css
    document.querySelector('.menu-button').onclick = function(e) {
        e.preventDefault();
        document.querySelector(".circle").classList.toggle('open');
    }

})



///////////////////////////////////////////////////////////////////////// LOADING DATA SET ///////////////////////////////////////////////////

//json file brought in using fetch in order to access the data in json file
fetch("data/data.json") //path to the data.json file
    .then(function(resp) {
        return resp.json(); //returns the data as json in order to access it in the script
    })
    .then(function(data) {
        //page loads and players from data.json appends to the custom-row tab-text classes 
        // (in this case 15 records) to the mark-up HTML
        $(document).ready(function() {
            players = $(".custom-row .tab-text")

            //loops through each object in the json file
            $.each(data, function(idx, value) {
                //console out what the values are using keys and values
                // console.log(idx); //index 0 - 14 of the array
                // console.log(value); //the object
                // console.log(value.firstName) //value "firstName" of the object

                //loops through indexes 0-14 (15 objects in the data) within the divs referenced above
                players[idx].innerHTML =
                    // temperal literal that will populate the div classes we named above; includes the values of keys consoled above
                    `<h2>${value.firstName}</h2><h3 style="font-size: 1rem;margin-top:10px; text-align: left;">${value.city}, IN</h3><span style="width: 100%"><div id="animate">"${value.story}"</div></span>
                    <p>${value.firstName} loves<br><dfn data-info="${value.quip}">${value.game}</dfn></p>`;

            })
            //shows there are 15 objects in the array
            // console.log(data.length); 
        });
    })




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//loads the headline class to toggle between ready and hover
jQuery(".titleWrapper").addClass("ready");
jQuery(".titleWrapper h1").each(function() {
    var fullString;
    var characters = jQuery(this).text().split("");

    //fills in the area with spaces as a string, essentially hides one of the other classes
    $this = jQuery(this);
    $this.empty();
    $.each(characters, function(i, el) {
        if (el == " ") {
            el = "&nbsp;"
        };
        $this.append("<span>" + el + "</span>");
    });

});