console.log("file is working");



///////////////////////////////////////////////////////////////////////// LOADING DATA SET ///////////////////////////////////////////////////
//json file brought in using fetch in order to access the json file
fetch("data/data.json")
    .then(function (resp) {
        return resp.json();
    })
    .then(function (data) {

        //prints the data to the console
        console.log(data[50]);
        console.log(data);
    })

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////