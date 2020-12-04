console.log("file is working");

///////////////////////////////////////////////////////////////////////// LOADING DATA SET ///////////////////////////////////////////////////
//json file brought in using fetch in order to access the json file
fetch("data/data.json")
    .then(function (resp) {
        return resp.json();
    })
    .then(function (data) {
        $(document).ready(function () {
            
            $.each(data, function(idx, value) {
                console.log(value);
                console.log(value.firstName)
                // for (i = 0; i <= players.length; i++) {
                player = $(".custom-row .tab-text").append(
                    `<h2>${value.firstName}</h2>
                    <h3 style="font-size: 1rem;margin-top:10px; text-align: left;">${value.city}, IN</h3>
                    <p>${value.game}</p>
                    <div class="icons-block"> <a href="#" class="social-icon-1"><i class="fa fa-facebook-official"></i></a> <a href="#" class="social-icon-2"><i class="fa fa-twitter-square"></i></a> <a href="#" class="social-icon-3"><i class="fa fa-youtube-square"></i></a> </div>`);
                // }
            })
        });
    })

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
