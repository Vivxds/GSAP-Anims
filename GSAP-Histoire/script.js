gsap.registerPlugin(ScrollTrigger);

gsap.to(".mask", {
  scrollTrigger: {
    start: "center 50%",
    trigger: ".wrapper",
    scrub: true,
    pin: true
  },
  width: "100%"
});