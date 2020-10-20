gsap.registerPlugin(ScrollTrigger);

gsap.to(".img1", {
  scrollTrigger: {
    trigger: ".img1"
  },
  x: "-500%",
  ease: 1,
  duration: 1,
  delay: 0.4
});

gsap.to(".img2", {
  scrollTrigger: {
    trigger: ".img2"
  },
  x: "-500%",
  ease: 1,
  duration: 1,
  delay: 0.8
});

gsap.to(".img3", {
  scrollTrigger: {
    trigger: ".img3"
  },
  x: "-500%",
  ease: 1,
  duration: 1,
  delay: 1.2
});

gsap.to(".img4", {
  scrollTrigger: {
    trigger: ".img4"
  },
  x: "-500%",
  ease: 1,
  duration: 1,
  delay: 1.6
});