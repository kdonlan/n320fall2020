console.log("working");

let section = document.getElementById("section");
TweenLite.to(section, {duration: .4, x: -100, alpha: 0, delay: .2});
document.getElementById('cta').addEventListener('click', function(){
    TweenMax.to('.galleryContainer', 1, {scaleY:1, height: '600px'})
})

function changeColor() {
    document.getElementsByClassName('.galleryImage');
    
}