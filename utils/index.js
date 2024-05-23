import { ScrollTrigger, SplitText } from "@/lib/plugins";
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger);
export const zyanUtils = {
  scrollAnimation() {
    let device_width = window.innerWidth;
    let fade_left = gsap.utils.toArray(".fade_left");
    gsap.set(fade_left, {
      opacity: 0,
      x: -30,
    });

    if (fade_left) {
      if (device_width < 1023) {
        fade_left.forEach((item, i) => {
          gsap.to(item, {
            scrollTrigger: {
              trigger: item,
              start: "top center+=150",
              markers: false,
            },
            opacity: 1,
            x: 0,
            ease: "power2.out",
            duration: 2,
            stagger: {
              each: 0.4,
            },
          });
        });
      } else {
        fade_left.forEach((item, i) => {
          const containerID = `#${item.getAttribute("data-trigerId")}`;
          gsap.to(`${containerID !== "#null" ? containerID : ""} .fade_left`, {
            scrollTrigger: {
              trigger: containerID !== "#null" ? containerID : ".fade_left",
              start: "top center+=150",
              markers: false,
            },
            opacity: 1,
            x: 0,
            ease: "power2.out",
            duration: 2,
            stagger: {
              each: 0.4,
            },
          });
        });
      }
    }

    /** Fade Right */
    let fade_right = gsap.utils.toArray(".fade_right");
    gsap.set(fade_right, {
      opacity: 0,
      x: +30,
    });

    if (fade_right) {
      if (device_width < 1023) {
        fade_right.forEach((item, i) => {
          gsap.to(item, {
            scrollTrigger: {
              trigger: item,
              start: "top center+=150",
              markers: false,
            },
            opacity: 1,
            x: 0,
            ease: "power2.out",
            duration: 2,
            stagger: {
              each: 0.4,
            },
          });
        });
      } else {
        fade_right.forEach((item, i) => {
          const containerID = `#${item.getAttribute("data-trigerId")}`;
          const stagger = item.getAttribute("data-stagger");
          gsap.to(`${containerID} .fade_right`, {
            scrollTrigger: {
              trigger: containerID,
              start: "top center+=150",
              markers: false,
            },
            opacity: 1,
            x: 0,
            ease: "power2.out",
            duration: 2,
            stagger: {
              each: stagger ? stagger : 0.4,
            },
          });
        });
      }
    }

    /** Fade Bottom */
    let fade_bottom = gsap.utils.toArray(".fade_bottom");
    if (device_width < 1023) {
      fade_bottom.forEach((item, i) => {
        gsap.set(item, { opacity: 0, y: 60 });
        let featured2Timeline = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top center+=200",
          },
        });
        featured2Timeline.to(item, {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power4.out",
        });
      });
    } else {
      fade_bottom.forEach((item, i) => {
        const containerID = `#${item.getAttribute("data-trigerId")}`;
        const stagger = item.getAttribute("data-stagger");
        const duration = item.getAttribute("data-duration");
        const defaultValue = item.getAttribute("data-default-value");
        gsap.set(`${containerID !== "#null" ? containerID : ""} .fade_bottom`, {
          opacity: 0,
          y: defaultValue ? defaultValue : 30,
        });
        gsap.to(`${containerID !== "#null" ? containerID : ""} .fade_bottom`, {
          scrollTrigger: {
            trigger: containerID !== "#null" ? containerID : ".fade_bottom",
            start: "top center+=200",
          },
          opacity: 1,
          y: 0,
          duration: duration ? duration : 2,
          ease: "power4.out",
          stagger: stagger ? stagger : 0.3,
        });
      });
    }
  },
  headingRevel() {
    if (window.innerWidth > 767) {
      document.querySelectorAll(".has-animation").forEach(function (element) {
        var splitType = "lines,chars"; // Adjusted space to match your original setting
        var splitto = new SplitText(element, {
          type: splitType,
          linesClass: "anim_line",
          charsClass: "anim_char",
          wordsClass: "anim_word",
        });

        // QuerySelectorAll returns a NodeList, we convert it to Array to use the forEach method
        var chars = Array.from(element.querySelectorAll(".anim_char"));

        // GSAP animation
        gsap.fromTo(
          chars,
          { y: "100%" },
          {
            y: "0%",
            duration: 0.8,
            stagger: 0.01,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element.parentNode,
              start: "top center+=300",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }
  },
  imgToSVG() {
    document.querySelectorAll("img.svg").forEach((el) => {
      const imgID = el.getAttribute("id");
      const imgClass = el.getAttribute("class");
      const imgURL = el.getAttribute("src");

      fetch(imgURL)
        .then((data) => data.text())
        .then((response) => {
          const parser = new DOMParser();
          const xmlDoc = parser.parseFromString(response, "text/html");
          let svg = xmlDoc.querySelector("svg");

          if (typeof imgID !== "undefined") {
            svg.setAttribute("id", imgID);
          }

          if (typeof imgClass !== "undefined") {
            svg.setAttribute("class", imgClass + " replaced-svg");
          }

          svg.removeAttribute("xmlns:a");
          if (el.parentNode) {
            el.parentNode.replaceChild(svg, el);
          }
        });
    });
  },
  customMouse() {
    var mouse = { x: 0, y: 0 }; // Cursor position
    var pos = { x: 0, y: 0 }; // Cursor position
    var ratio = 0.15; // delay follow cursor
    var active = false;
    var ball = document.getElementById("ball");

    /** default */
    const defaultValue = {
      duration: 0.3,
      opacity: 0.5,
      width: "30px",
      height: "30px",
      backgroundColor: "transparent",
      border: "2px solid #fff",
    };
    const hoverBall = {
      duration: 0.3,
      css: {
        borderWidth: "0",
        opacity: "1",
        width: "95px",
        height: "95px",
        backgroundColor: "#fff",
      },
    };
    gsap.set(ball, {
      // scale from middle and style ball
      xPercent: -50,
      yPercent: -50,
    });

    document.addEventListener("mousemove", mouseMove);
    function mouseMove(e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }

    gsap.ticker.add(updatePosition);
    function updatePosition() {
      if (!active) {
        pos.x += (mouse.x - pos.x) * ratio;
        pos.y += (mouse.y - pos.y) * ratio;

        gsap.set(ball, { x: pos.x, y: pos.y });
      }
    }

    // Convert jQuery hover event listeners to vanilla JavaScript
    document
      .querySelectorAll("a, .c-pointer, button, .progress")
      .forEach((element) => {
        if (!element.matches(".project_slider a")) {
          // Check to omit from selection
          element.addEventListener("mouseenter", function () {
            gsap.to(ball, {
              duration: 0.3,
              borderWidth: "0",
              opacity: 0.5,
              backgroundColor: "#CCC",
              width: "80px",
              height: "80px",
            });
          });

          element.addEventListener("mouseleave", function () {
            gsap.to(ball, defaultValue);
          });
        }
      });

    // Data cursor
    document.querySelectorAll("[data-cursor]").forEach((element) => {
      element.addEventListener("mouseenter", function () {
        const ballView = document.createElement("div");
        ballView.className = "ball-view";
        ball.appendChild(ballView);
        ballView.textContent = element.getAttribute("data-cursor");
        ballView.innerHTML = ballView.textContent;
        gsap.to(ball, hoverBall);
      });

      element.addEventListener("mouseleave", function () {
        ball.querySelector(".ball-view")?.remove();
        gsap.to(ball, defaultValue);
      });
    });

    // Handling slider hover effects
    document.querySelectorAll(".slick-list").forEach((element) => {
      element.addEventListener("mouseenter", function () {
        const ballDrag = document.createElement("div");
        ballDrag.className = "ball-drag";
        ballDrag.innerHTML =
          '<i class="far fa-angle-left"></i><i class="far fa-angle-right"></i>';
        ball.appendChild(ballDrag);
        gsap.to(ball, hoverBall);
      });

      element.addEventListener("mouseleave", function () {
        ball.querySelector(".ball-drag")?.remove();
        gsap.to(ball, defaultValue);
      });
    });

    // Handling gallery hover effects
    document.querySelectorAll(".gallery").forEach((element) => {
      element.addEventListener("mouseenter", function () {
        const ballGallery = document.createElement("div");
        ballGallery.className = "ball-gallery";
        ballGallery.innerHTML = '<i class="fa-sharp fa-solid fa-eye"></i>';
        ball.appendChild(ballGallery);
        gsap.to(ball, hoverBall);
      });

      element.addEventListener("mouseleave", function () {
        ball.querySelector(".ball-gallery")?.remove();
        gsap.to(ball, defaultValue);
      });
    });
  },
  progressBar() {
    window.addEventListener("scroll", function () {
      let scroll = window.pageYOffset || document.documentElement.scrollTop;

      document
        .querySelectorAll(".tf__team_skills_bar_single .barfiller")
        .forEach(function (progressbar) {
          let value = progressbar
            .querySelector(".fill")
            .getAttribute("data-percentage");
          if (progressbar) {
            let oTop =
              progressbar.getBoundingClientRect().top +
              window.pageYOffset -
              window.innerHeight;
            progressbar.querySelector(".tipWrap .tip").innerHTML = `${value}%`;
            if (scroll > oTop) {
              progressbar.classList.add("progressbar-active");
              progressbar.querySelector(".fill").style.width = `${value}%`;
              progressbar.querySelector(
                ".tipWrap .tip"
              ).style.left = `${value}%`;
            } else {
              progressbar.classList.remove("progressbar-active");
              progressbar.querySelector(".fill").style.width = "0%";
              progressbar.querySelector(".tipWrap .tip").style.left = "0%";
            }
          }
        });
    });
  },
  scrollToActiveNav() {
    window.addEventListener("scroll", () => {
      const sections = document.querySelectorAll("section");
      const navLi = document.querySelectorAll(".main_menu_2 li");
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute("id");
        }
      });
      navLi.forEach((li) => {
        if (current !== null) {
          li.classList.remove("active");
        }
        if (
          li.getElementsByTagName("a")[0].getAttribute("href") == `#${current}`
        ) {
          li.classList.add("active");
        }
      });
    });
  },
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
