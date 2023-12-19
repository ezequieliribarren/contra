import gsap from "gsap";

export const preLoaderAnim = (areVideosLoaded) => {
  const tl = gsap.timeline();

  tl.from(".image-container img", {
    duration: 0.5,
    scale: 0.8,
    opacity: 0,
    ease: "Power3.easeInOut",
  })
    .to(".image-container img:nth-child(1)", {
      duration: 0.5,
      scale: 1,
      opacity: 1,
      ease: "Power3.easeInOut",
    })
    .to(".image-container img:nth-child(1)", {
      duration: 0.5,
      scale: 1.2,
      opacity: 0,
      ease: "Power3.easeInOut",
    })
    .to(".image-container img:nth-child(2)", {
      duration: 0.5,
      scale: 1,
      opacity: 1,
      ease: "Power3.easeInOut",
    })
    .to(".image-container img:nth-child(2)", {
      duration: 0.5,
      scale: 1.2,
      opacity: 0,
      ease: "Power3.easeInOut",
    })
    .to(".image-container img:nth-child(3)", {
      duration: 0.5,
      scale: 1,
      opacity: 1,
      ease: "Power3.easeInOut",
    })
    .to(".image-container img:nth-child(3)", {
      duration: 0.5,
      scale: 1.2,
      opacity: 0,
      ease: "Power3.easeInOut",
    })
    .to(".image-container img:nth-child(1)", {
      duration: 0.5,
      scale: 1,
      opacity: 1,
      ease: "Power3.easeInOut",
    })
    .fromTo(
      ".texts-container",
      {
        y: "-50%",
        color: "#fff",
      },
      {
        duration: 2.5,
        y: "0%",
        opacity: 1,
        ease: "Power3.easeInOut",
        onComplete: () => {
          changeColorToOrange();
          animateArchitecture();
        },
      },
      "-=0.2"
    )
    .to(".preloader", {
      duration: 0,
      visibility: "hidden", // Use visibility property instead of display
    });

  if (!areVideosLoaded) {
    // If the videos haven't loaded completely, restart the animation
    tl.play();
  }
};