const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAim() {
    var tl = gsap.timeline();

    tl.from("#nav", {
        y: 10,
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    }).to(".boundingelem", {
        y: 0,
        duration: 2,
        ease: Expo.easeInOut,
        stagger: .2,
        delay: -1.5
    }).from("#herofooter", {
        opacity: 0,
        duration: 1.5,
        delay: -1.4,
        ease: Expo.easeInOut,
    })
}

var timeout;
function squizTheCircle() {
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;
    window.addEventListener("mousemove", function (dets) {
        clearTimeout(timeout);
        var xdiff = dets.clientX - xprev;
        var ydiff = dets.clientY - yprev;

        //Logic from the video
        // xscale = gsap.utils.clamp(1.2, 1.2, xdiff);
        // yscale = gsap.utils.clamp(.8, .8, ydiff);

        xprev = dets.clientX;
        yprev = dets.clientY;

        //Login made by myself
        if (xdiff) {
            xscale = 1.3;
        } else {
            xscale = 1
        }
        if (ydiff) {
            yscale = 1.3;
        } else {
            yscale = 1
        }

        circleMouseFoller(xscale, yscale);

        timeout = setTimeout(() => {
            document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`
        }, 100);
    })
}

function circleMouseFoller(xscale, yscale) {
    window.addEventListener("mousemove", function (dets) {
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`
    });
}

squizTheCircle();
circleMouseFoller();
// firstPageAim();

document.querySelectorAll(".elem").forEach((elem) => {
    var rotate = 0;
    var diffrot = 0;

    elem.addEventListener("mousemove", (dets) => {
        var diff = dets.clientY - elem.getBoundingClientRect().top;

        // console.log(elem.getBoundingClientRect().top, dets.clientY);

        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;

        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power3,
            top: diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-15, 15, diffrot)
        });

        document.querySelector("#minicircle").classList.add('active');
        document.querySelector("#minicircle").innerText = "view";
        console.log(document.querySelector("#minicircle"));
    })

    // elem.addEventListener("mouseleave", (dets) => {
    //     gsap.to(elem.querySelector("img"), {
    //         opacity: 0,
    //         ease: Power3,
    //         duration: 0.5
    //     })
    //     document.querySelector("#minicircle").classList.remove('active');
    //     document.querySelector("#minicircle").innerText = "";
    // })

})