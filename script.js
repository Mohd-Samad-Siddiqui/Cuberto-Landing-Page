Shery.mouseFollower();
Shery.makeMagnet(".magnet-effect");
Shery.hoverWithMediaCircle(".hover-effect", {videos: ["./videos/0.mp4", "./videos/2.mp4", "./videos/3.mp4"]});

gsap.to(".fabout-elems", {
    scrollTrigger: {
      trigger: "#feature-about-and-img",
      pin: true,
      start: "top top",
      end: "bottom bottom",
      endTrigger: ".last-effect",
      scrub: 1,
    },
    y: "-300%",
    ease: Power1,
  });
  
  let sections = document.querySelectorAll(".fabout-elems");
  Shery.imageEffect(".img-collection", {
    style: 4,
    config: { onMouse: { value: 1 } },
    slideStyle: (setScroll) => {
      sections.forEach(function (section, index) {
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          scrub: 1,
          onUpdate: function (prog) {
            setScroll(prog.progress + index);
          },
        });
      });
    },
  });