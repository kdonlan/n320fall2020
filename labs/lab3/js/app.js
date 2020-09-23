//describes the item in the machine
class Item {
    constructor(name, inventory, image) {
        this.name = name;
        this.inventory = inventory;
        this.image = image;
    }
    render() {
        return `<img style="width:300px;"src="${this.image}"><div><h3>${this.name}</h3></div>
            <div><p>Inventory: ${this.inventory}<p></div></div><br>`;
    }

    buyItem1(newCount1) {
        if (this.inventory > 0) {
            newCount1 = this.inventory--;
        }
    }

    buyItem2(newCount2) {
        if (this.inventory > 0) {
            newCount2 = this.inventory--;
        }
    }

    buyItem3(newCount3) {
        if (this.inventory > 0) {
            newCount3 = this.inventory--;
        }
    }
}

//creates Snickers
let vending1 = new Item("Snickers", 12, "./images/snickers.jpg");
//makes the vend Div id name
let vendDiv = document.getElementById("vendDiv");
//puts the vending1 item on the page
vendDiv.innerHTML = vending1.render();

//creates Twix
let vending2 = new Item("Twix", 8, "./images/twix.jpg");
//makes the vend Div 2 id name
let vendDiv2 = document.getElementById("vendDiv2");
//puts the vending2 item on the page
vendDiv2.innerHTML = vending2.render();

//creates Doritos
let vending3 = new Item("Doritos", 15, "./images/doritos.jpg");
//creates the vending 3 item id name
let vendDiv3 = document.getElementById("vendDiv3");
//makes the vend Div 3 id name
vendDiv3.innerHTML = vending3.render();


//invokes the buyItem() click functions
function buyItem1() {
    vending1.buyItem1();
    vendDiv.innerHTML = vending1.render();
}

function buyItem2() {
    vending2.buyItem2();
    vendDiv2.innerHTML = vending2.render();
}

function buyItem3() {
    vending3.buyItem3();
    vendDiv3.innerHTML = vending3.render();
}