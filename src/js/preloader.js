import gsap from "gsap";

export const preLoaderAnim = () => {
  const tl = gsap.timeline();

  // Ajusta la opacidad inicial y escala
  tl.from(".image-container img", {
    duration: 0.5,
    scale: 0.8,
    opacity: 0,
    ease: "Power3.easeInOut",
  })
    // Ajusta el tiempo de visualización y el escalado para cada imagen
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
    // Ajusta el tiempo final de visualización para la primera imagen
    .to(".image-container img:nth-child(1)", {
      duration: 0.5,
      scale: 1,
      opacity: 1,
      ease: "Power3.easeInOut",
    })
    // Completa el resto de la animación
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
