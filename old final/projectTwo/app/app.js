console.log("file is working");

// data = [];

///////////////////////////////////////////////////////////////////////// LOADING DATA SET ///////////////////////////////////////////////////
//json file brought in using fetch in order to access the json file
fetch("data/data.json")
    .then(function (resp) {
        return resp.json();
    })
    .then(function (data) {
        // // var output = document.getElementByClass("name").innerHTML = `${data.data[5115].firstName}`

        $(document).ready(function () {
            for (i = 0; i < 15; i++) {
                var output = "";
                output = $("#trying").append(
                    `<ul><li>${data[i].firstName}</li>
                    <li>${data[i].city}</li>
                    <li>${data[i].game}</li>
                    <li>${data[i].story}</li></ul>`
                )
            };
        });
        //prints the data to the console
        console.log(data[78]);
        console.log(data);
    })

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////