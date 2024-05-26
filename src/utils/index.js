// import { ScrollTrigger, SplitText } from "@/lib/plugins";
import { gsap } from "gsap";

// gsap.registerPlugin(ScrollTrigger);
export const zyanUtils = {

    // headingRevel() {
    //     if (window.innerWidth > 767) {
    //         document.querySelectorAll(".has-animation").forEach(function (element) {
    //             var splitType = "lines,chars"; // Adjusted space to match your original setting
    //             var splitto = new SplitText(element, {
    //                 type: splitType,
    //                 linesClass: "anim_line",
    //                 charsClass: "anim_char",
    //                 wordsClass: "anim_word",
    //             });

    //             // QuerySelectorAll returns a NodeList, we convert it to Array to use the forEach method
    //             var chars = Array.from(element.querySelectorAll(".anim_char"));

    //             // GSAP animation
    //             gsap.fromTo(
    //                 chars,
    //                 { y: "100%" },
    //                 {
    //                     y: "0%",
    //                     duration: 0.8,
    //                     stagger: 0.01,
    //                     ease: "power2.out",
    //                     scrollTrigger: {
    //                         trigger: element.parentNode,
    //                         start: "top center+=300",
    //                         toggleActions: "play none none none",
    //                     },
    //                 }
    //             );
    //         });
    //     }
    // },
    // imgToSVG() {
    //     document.querySelectorAll("img.svg").forEach((el) => {
    //         const imgID = el.getAttribute("id");
    //         const imgClass = el.getAttribute("class");
    //         const imgURL = el.getAttribute("src");

    //         fetch(imgURL)
    //             .then((data) => data.text())
    //             .then((response) => {
    //                 const parser = new DOMParser();
    //                 const xmlDoc = parser.parseFromString(response, "text/html");
    //                 let svg = xmlDoc.querySelector("svg");

    //                 if (typeof imgID !== "undefined") {
    //                     svg.setAttribute("id", imgID);
    //                 }

    //                 if (typeof imgClass !== "undefined") {
    //                     svg.setAttribute("class", imgClass + " replaced-svg");
    //                 }

    //                 svg.removeAttribute("xmlns:a");
    //                 if (el.parentNode) {
    //                     el.parentNode.replaceChild(svg, el);
    //                 }
    //             });
    //     });
    // },


    preloader() {
        const svg = document.getElementById("svg");
        const tl = gsap.timeline();
        const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
        const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

        tl.to(".preloader-text", {
            delay: 0.5,
            y: -100,
            opacity: 0,
        });
        tl.to(svg, {
            duration: 0.1,
            // attr: { d: curve },
            ease: "power2.easeIn",
        }).to(svg, {
            duration: 0.5,
            attr: { d: flat },
            ease: "power2.easeOut",
        });
        tl.to(".preloader", {
            y: -1500,
        });
        tl.to(".preloader", {
            zIndex: -1,
            display: "none",
        });
    },
};
