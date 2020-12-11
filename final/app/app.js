//check that my script is linked!
console.log("file is working");

///////////////////////////////////////////////////////////////////////// LOADING DATA SET ///////////////////////////////////////////////////
//json file brought in using fetch in order to access the json file
fetch("data/data.json") //path to the data.json file
    .then(function (resp) {
        return resp.json(); //returns the data as json in order to access it in the script
    })
    .then(function (data) {
        $(document).ready(function () { 
            //page loads and players from data.json appends to the custom-row tab-text classes in the mark up HTML
            players = $(".custom-row .tab-text")

            $.each(data, function(idx, value) { //loops through each object in the json file
                //console out what the values are
                // console.log(idx); //index 0 - 14 of the array
                // console.log(value); //the object
                // console.log(value.firstName) //value "firstName" of the object
                // console.log(value.city) //value "city" of the object
                // console.log(value.game) //value "game" of the object
                
                //loops through indexes 0-14 (15 objects in the data)
                //while temperal literal that will populate the div classes we named above; includes the values of keys consoled above
                players[idx].innerHTML = 
                    `<h2>${value.firstName}</h2>
                    <h3 style="font-size: 1rem;margin-top:10px; text-align: left;">${value.city}, IN</h3>
                    <p>${value.game}</p>`;
                
            })
            //shows there are 15 objects in the array
            // console.log(data.length); 
        });
            
        // $(document).ready(function () { 
        //     //page loads and players from data.json appends to the custom-row tab-text classes in the mark up HTML
        //     quotes = $(".custom-row .tab-textb")

        //     $.each(data, function(idx, value) { //loops through each object in the json file
        //         //console out what the values are
        //         // console.log(idx); //index 0 - 14 of the array
        //         // console.log(value); //the object
        //         // console.log(value.firstName) //value "firstName" of the object
        //         // console.log(value.city) //value "city" of the object
        //         // console.log(value.game) //value "game" of the object
                
        //         //loops through indexes 0-14 (15 objects in the data)
        //         //while temperal literal that will populate the div classes we named above; includes the values of keys consoled above
        //         quotes[idx].innerHTML = 
        //             `<h2>"</h2>
        //             <h3 style="font-size: 1rem;margin-top:10px; text-align: left;">${value.story}</h3>
        //             <h4>"</h4>`;
        //     })
        //     //shows there are 15 objects in the array
        //     // console.log(data.length); 
        // });

        
    })


    

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//loads the headline class to toggle between ready and hover
jQuery(".titleWrapper").addClass("ready");	
jQuery(".titleWrapper h1").each(function(){
	var fullString;
	var characters = jQuery(this).text().split("");
    
    //fills in the area with spaces as a string, essentially hides one of the other classes
	$this = jQuery(this);
	$this.empty();
	$.each(characters, function (i, el) {
		if(el == " "){el = "&nbsp;"};
    $this.append("<span>" + el + "</span>");
	});
		
});

//onclick function of the players cards that will show quote
// function flip() {
//     console.log("card flips");
//     $(".effect-twelve").toggleClass(".effect-twelveb");
//     // $("#front").hide();

// }


function flip() {
    $('.card').toggleClass('flipped');
}

