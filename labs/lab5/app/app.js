console.log("working");

let section = document.getElementById("section");
TweenLite.to(section, { duration: .4, x: -100, alpha: 0, delay: .2 });
document.getElementById('cta').addEventListener('click', function () {
    TweenMax.to('.galleryContainer', 1, { scaleY: 1, height: '600px' })
})

function disappear() {
    let image = document.getElementsByClassName("galleryImage");
    for (i = 0; i < image.length; i++) {
        TweenLite.from(image[0], { duration: .1 });
        TweenLite.to(image[0], { duration: .4, position: -100, alpha: 0 })
    }
}

function rotate() {
    let image = document.getElementsByClassName("galleryImage");
    for (i = 0; i < image.length; i++) {
        TweenLite.to(image[1], { rotation: 180, opacity: 0 });
    }

    TweenLite.from(image[1], { duration: 2, position: -100 });
}



function spin() {
    let image = document.getElementsByClassName("galleryImage");
    for (i = 0; i < image.length; i++) {
        let tween = gsap.to(image[2], { rotation: 360, duration: .3, opacity: 0 });
    }
}

function fade() {
    let image = document.getElementsByClassName("galleryImage");
    for (i = 0; i < image.length; i++) {
        let tween = gsap.to(image[3], { duration: 2, opacity: 0 });
        return tween;
    }
}

function popout() {
    let image = document.getElementsByClassName("galleryImage");
    for (i = 0; i < image.length; i++) {
        gsap.to(image[4], {
            duration: 1,
            ease: "strongInOut",
        })
        gsap.to(image[4], {
            opacity: 0,
            scale: 0
        }
        )
    }

}


function popin() {
    let image = document.getElementsByClassName("galleryImage");
    for (i = 0; i < image.length; i++) {
        gsap.to(image[5], {
            duration: 1,
            x: 0,
            ease: "elastic",
        })
        gsap.to(image[5], {
            opacity: 0,
            scale: 0
        }
        )
    }
}
