import { Power2, gsap } from "gsap";
import { ScrollTrigger } from "@/lib/plugins";
gsap.registerPlugin(ScrollTrigger);

let history = [];

export default function imgAnimReveal(img_reveal) {
  if (typeof window !== "undefined") {
    if (history.includes(img_reveal)) {
      return;
    } else {
      history.push(img_reveal);
      let tHero = gsap.context(() => {
        try {
          if (img_reveal) {
            let image = img_reveal.querySelector("img");
            let tl = gsap.timeline({
              scrollTrigger: {
                trigger: img_reveal,
                start: "top 50%",
              },
            });

            tl.set(img_reveal, { autoAlpha: 1 });
            tl.from(img_reveal, 1.5, {
              xPercent: -100,
              ease: Power2.out,
            });
            tl.from(image, 1.5, {
              xPercent: 100,
              scale: 1.3,
              delay: -1.5,
              ease: Power2.out,
            });
          }
        } catch (e) {
          console.log("Image anim reveal error: ", e);
        }
      });
      return () => tHero.revert();
    }
  }
}
