class Item {
    constructor(name, inventory, image) {
        this.name = name;
        this.inventory = inventory;
        this.image = image;
    }
    render(newCount) {
        return `<img style="width:300px;"src="${this.image}"><div><h3>${this.name}</h3></div>
            <button onclick="buyItem()">Buy ${this.name}</button>
            Inventory: ${this.inventory}</div><br>`;
    }
    
    buyItem(newCount) {
        if (this.inventory > 0) {
            newCount = this.inventory--;
            // console.log(this.inventory);
            // console.log(newCount);
            // console.log("Buying the First Item");
        }
    }
}

let vending1 = new Item("Snickers", 30, "./images/snickers.jpg");
let vendDiv = document.getElementById("vendDiv");
vendDiv.innerHTML = vending1.render();

let vending2 = new Item("Twix", 80,"./images/twix.jpg");
let vendDiv2 = document.getElementById("vendDiv2");
vendDiv2.innerHTML = vending2.render();

let vending3 = new Item("Doritos", 50,"./images/doritos.jpg");
let vendDiv3 = document.getElementById("vendDiv3");
vendDiv3.innerHTML = vending3.render();

function buyItem() {
    vending1.buyItem();
    vending2.buyItem();
    vending3.buyItem();
    vendDiv.innerHTML = vending1.render();
    vendDiv2.innerHTML = vending2.render();
    vendDiv3.innerHTML = vending3.render();

}