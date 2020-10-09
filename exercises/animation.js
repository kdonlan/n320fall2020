console.log("working");

//get reference to the id
let txtStatInput = document.getElementById("txtStatInput");

function textFocus() {
    // resetAnimationFrame(txtStatInput);
    txtStatInput.classList.remove("deselected");
    txtStatInput.classList.add("selected");
}

function textLeave() {
    txtStatInput.classList.remove("selected");
    txtStatInput.classList.add("deselected");
}

function resetAnimation(el) {
    el.style.animation = 'none';
    el.offsetHeight; //trigger reflow
    el.style.animation = null;
}

let exampleDiv = document.getElementById("txtCool");

TweenMax.to(exampleDiv, {duration: .2, x: 100});

let navItems = document.getElementsByClassName("navitem");
console.log(navItems);

for(let i = 0; i < navItems.length; i++) {
    TweenLite.from(navItems[i], {duration: .4, x: -100, alpha: 0, delay: i*.2});
}