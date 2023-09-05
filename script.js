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

function squizTheCircle() {
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;
    window.addEventListener("mousemove", function (dets) {
        var xdiff = dets.clientX - xprev;
        var ydiff = dets.clientY - yprev;

        xscale = gsap.utils.clamp(.8, 1.2, xdiff);
        yscale = gsap.utils.clamp(.8, 1.2, ydiff);

        xprev = dets.clientX;
        yprev = dets.clientY;
    })
}
squizTheCircle();

function circleMouseFoller() {
    window.addEventListener("mousemove", function (dets) {
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`
    });
}

circleMouseFoller();
firstPageAim();