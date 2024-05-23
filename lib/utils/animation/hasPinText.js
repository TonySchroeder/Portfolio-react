import { gsap } from "gsap";
import { ScrollTrigger } from "@/lib/plugins";
gsap.registerPlugin(ScrollTrigger);

let history = [];

export default function hasPinText(pin_content, trigger_content) {
  if (typeof window !== "undefined") {
    if (history.includes(pin_content)) {
      return;
    } else {
      history.push(pin_content);
      let tHero = gsap.context(() => {
        try {
          if (pin_content) {
            gsap.to(pin_content, {
              scrollTrigger: {
                trigger: trigger_content,
                pin: pin_content,
                pinSpacing: false,
                start: "top top",
                end: "bottom 89",
                delay: 1,
                color: "#333",
              },
            });
          }
        } catch (e) {
          console.log("Pin text error: ", e);
        }
      });
      return () => tHero.revert();
    }
  }
}
