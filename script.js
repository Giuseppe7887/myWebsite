const arrow = document.getElementsByClassName("arrow");
const header = document.querySelector("#header");
const container = document.querySelector("#container");
const main = document.querySelector("#main");
gsap.registerPlugin(ScrollTrigger);
const scrollTrigger = ScrollTrigger.create({})


window.onload = () => {

    // backgound color changing

    new Promise((resolve, reject) => {
        resolve(
            gsap.to("body", {
                backgroundColor: "#61dafb",
                scrollTrigger: {
                    trigger: "#main",
                    start: "top center",
                    end: "400px center",
                    scrub: true,
                    ease: "none"
                }
            })
        )
    }).then(() => {
        gsap.fromTo("body", { backgroundColor: "#61dafb" }, {
            backgroundColor: "#373a4c",
            scrollTrigger: {
                trigger: "#main",
                start: "300px center",
                end: "900px center",
                scrub: true,
            }
        })
    }).then(() => {
        gsap.fromTo("body", { backgroundColor: "#373a4c" }, {
            backgroundColor: "white",
            scrollTrigger: {
                trigger: "#main",
                duration: 2,
                start: "1200px center",
                end: "1500px center",
                scrub: true,
                ease: "none"
            }
        })
    })



    gsap.to(".first", {
        transform: "translateX(50px)",
        scrollTrigger: {
            trigger: ".first",
            start: "top bottom",
            end: "center bottom",
            scrub: 3
        }
    });
    gsap.to(".firstText", {
        transform: "translateX(0%)",
        scrollTrigger: {
            trigger: ".first",
            start: "top bottom",
            end: "center bottom",
            scrub: 3
        }
    });
    // fine prima animazione PC
    // inizio seconda animazione pC
    gsap.to(".second", {
        transform: "translateX(-80px)",
        scrollTrigger: {
            trigger: ".second",
            start: "top bottom",
            end: "center bottom",
            scrub: 2
        }
    })
    gsap.to(".secondText", {
        transform: "translateX(-5%)",
        scrollTrigger: {
            // markers:true,
            trigger: ".secondText",
            start: "top bottom",
            end: "550px bottom",
            scrub: 3
        }
    })
    // fine seconda animazione PC
    // inizio terza animazione PC
    gsap.to(".third", {
        transform: "translateX(50px)",
        scrollTrigger: {
            trigger: ".third",
            start: "top 500px",
            end: "550px bottom",
            scrub: 2
        }
    })
    gsap.to(".thirdText", {
        transform: "translateX(0%)",
        scrollTrigger: {
            trigger: ".thirdText",
            start: "top 500px",
            end: "550px bottom",
            scrub: 2
        }
    })


    // animazione testo
    gsap.to(".typewriterOFF", {
        css: { className: "typewriter" },
        scrollTrigger: {
            trigger: ".typewriterOFF",
            start: "top 65%",
        }
    })

    gsap.to(".pythonContainer", {
        transform: "translateX(0%)",
        scrollTrigger: {
            trigger: ".pythonContainer",
            scrub: 3,
            start: "top 400px",
            end: "top 300px"
        }
    })


    // pinned animation
    gsap.to(".scroller", {
        transform: "translateX(-400vw)",
        scrollSnapAlign: "center",
        scrollTrigger: {
            trigger: ".scroller",
            start: "top top",
            pin: true,
            end: "2000vh -800vh",
            scrub: 3,
        }

    })

    gsap.to("footer", {
        transform: "translateY(-200px)",
        scrollTrigger: {
            trigger: ".scroller",
            start: "bottom center",
            scrub: 2
        }
    })

    // blur header
    gsap.to("#header", {
        filter: "blur(100px)",
        scrollTrigger: {
            trigger: "#header",
            start: "bottom bottom",
            scrub: 3,
        }
    })

};