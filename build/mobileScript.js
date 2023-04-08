const header = document.querySelector("header");
const main = document.querySelector("#main");
gsap.registerPlugin(ScrollTrigger);

const scrollTrigger = ScrollTrigger.create({});
// var color = elem.getAttribute('data-color');

// blur header
// gsap.to(header, {
//     filter: "blur(100px)",
//     scrollTrigger: {
//         trigger: header,
//         start: "bottom bottom",
//         scrub: 3,
//     }
// })

gsap.utils.toArray(".container").forEach(x => {
    // background changing
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: x,
            // markers: true,
            start: "top bottom",
            end: "bottom bottom",
            scrub: 2,
            toggleActions:"restart reverse"
        }
    })

    tl.to("body", {
        backgroundColor: x.getAttribute("data-color"),
    })
})

// ANIMAZIONE TYPEwRITER
gsap.to(".typewriterOFF",{
    css:{className:"typewriter"},
    scrollTrigger:{
        trigger:".pythonContainer",
        start:"top 20%",
        end:"top top",
        // markers:true
    }
})

// pinned animation

gsap.to("#scroller",{
    transform:"translateX(-400vw)",
    scrollTrigger:{
        trigger:"#scroller",
        pin:true,
        scrub:2,
        start:"top top",
        end:"+=2000vw"
    }
})
// gsap.utils.toArray(".item").forEach(el=>{
//     const tl = gsap.timeline({
//         scrollTrigger:{
//             trigger:el,
//             pin:true,
//             markers:true,
//             start:"top center",
//             end:"+=400vw",
//             scrub:3
//         }
//     })
//     tl.to("#scroller",{
//         transform:"translateX(-400vw)"
//     })
// })


gsap.utils.toArray(".container").forEach(el=>{
    gsap.to(el,{
        transform:"translateX(0)",
        scrollTrigger:{
            trigger:el,
            scrub:3,
            start:"top bottom",
            end:"center center"
        }
    })
})