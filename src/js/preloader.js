import gsap from "gsap";

export const preLoaderAnim = () => {
  const tl = gsap.timeline();

  tl.to(".texts-container", {
    duration: 0.5, // Ajusta la duración inicial según tus preferencias
    y: "50%",
    opacity: 0,
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
      }
    )
    .to(".preloader", {
      duration: 0,
      css: { display: "none" },
    });
};

const changeColorToOrange = () => {
  gsap.to(".texts-container span", {
    duration: 1,
    color: "#ff9900",
    ease: "Power3.easeInOut",
  });
};

const animateArchitecture = () => {
  gsap.fromTo(
    ".texts-container span:last-child",
    {
      opacity: 1,
      y: 0,
    },
    {
      duration: 1,
      opacity: 0,
      y: 20,
      ease: "Power3.easeInOut",
    }
  );
};
