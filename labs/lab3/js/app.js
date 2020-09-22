class firstCandy {
    constructor(name, inventory) {
        this.name = name;
        this.inventory = inventory;
    }
    render() {
        return `
            <div>${this.name}: ${this.inventory}</div>
                  <div>Current Stock: ${this.newCount} </div>
                `;
    }
    
    buyCandy(newCount) {
        if (this.inventory > 0) {
           this.inventory --;
            console.log(this.inventory);
            console.log(newCount);
            console.log("Buying the First Candy");
        }
    }
}

let vending1 = new firstCandy("Snickers", 30);
let vendDiv = document.getElementById("vendDiv");
vendDiv.innerHTML = vending1.render();
function buyCandy() {
    vending1.buyCandy();
    vendDiv.innerHTML = vending1.render();
}