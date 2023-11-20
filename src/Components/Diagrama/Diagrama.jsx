import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { TransformControls } from "three/examples/jsm/controls/TransformControls";

const Diagrama = () => {
  const mountRef = useRef(null);
  const camera = useRef(null);
  const scene = useRef(null);

  let image1, image2, image3;

  useEffect(() => {
    const currentRef = mountRef.current;
    const { clientWidth: width, clientHeight: height } = currentRef;

    // Scene, Camera, and Renderer
    scene.current = new THREE.Scene();
    scene.current.background = new THREE.Color(0xffffff);

    camera.current = new THREE.PerspectiveCamera(20, width / height, 1, 100);
    scene.current.add(camera.current);
    camera.current.position.z = 25;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(width, height);
    currentRef.appendChild(renderer.domElement);

    // Resize the canvas
    const resize = () => {
      renderer.setSize(currentRef.clientWidth, currentRef.clientHeight);
      camera.current.aspect = currentRef.clientWidth / currentRef.clientHeight;
      camera.current.updateProjectionMatrix();
    };
    window.addEventListener("resize", resize);

    // Animate the scene
    const animateScene = () => {
      renderer.render(scene.current, camera.current);
      requestAnimationFrame(animateScene);
    };
    animateScene();

    // Axes Helper
    const axesHelper = new THREE.AxesHelper(2);
    scene.current.add(axesHelper);

    // Grid Helper
    const size = 10;
    const divisions = 10;
    const gridHelper = new THREE.GridHelper(size, divisions);
    scene.current.add(gridHelper);

    // Images
    image1 = createImage(5.1, 5.1, "images/rombosypiramides.png", -1.6, 1.2, 0);
    image2 = createImage(4.5, 4.5, "images/footer.png", 2, 1.2, 0);
    image3 = createImage(5, 5, "images/lineasabout.png", -1, 1.2, 0);

    scene.current.add(image1, image2, image3);

    // Circles
    const circle1 = createCircleWithGrid(1.5, 32, 0xffa550, 1.5, 2.7, 0);
    const circle2 = createCircleWithGrid(1.5, 32, 0xffa550, 1.5, -0.5, 0);

    scene.current.add(circle1, circle2);

    // Ocultar controles de traslación
    hideTranslationControls();

    // Ocultar controles de rotación para imágenes
    hideRotationControls(image1.userData.transformControls);
    hideRotationControls(image2.userData.transformControls);
    hideRotationControls(image3.userData.transformControls);

    // Clean up
    return () => {
      window.removeEventListener("resize", resize);
      currentRef.removeChild(renderer.domElement);
    };
  }, []);

  function createImage(width, height, imagePath, x, y, z) {
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(imagePath, (texture) => {
      texture.encoding = THREE.sRGBEncoding;
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.format = THREE.RGBAFormat;
      texture.transparent = true;
    });

    const imageGeometry = new THREE.PlaneGeometry(width, height);
    const imageMaterial = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide, transparent: true });
    const image = new THREE.Mesh(imageGeometry, imageMaterial);

    image.position.set(x, y, z);

    // Transform Controls
    const transformControls = new TransformControls(camera.current, mountRef.current);
    transformControls.attach(image);
    scene.current.add(transformControls);

    // Habilitar la rotación y la traslación
    transformControls.setMode("translate");
    transformControls.setMode("rotate");

    // Configurar controles
    transformControls.showX = false;
    transformControls.showY = false;
    transformControls.showZ = false;

    // Ocultar los controles por defecto
    transformControls.visible = false;

    // Guardar los controles en userData para acceder a ellos más tarde
    image.userData.transformControls = transformControls;

    return image;
  }

  function createCircleWithGrid(radius, segments, color, x, y, z) {
    const circleGeometry = new THREE.CircleGeometry(radius, segments);
    const circleMaterial = new THREE.LineBasicMaterial({
      color: color,
      transparent: true,
      opacity: 0.5,
    });

    const circle = createFixedPoint(circleGeometry, circleMaterial, x, y, z);

    return circle;
  }

  function createFixedPoint(geometry, material, x, y, z) {
    const point = new THREE.LineSegments(new THREE.EdgesGeometry(geometry), material);
    point.position.set(x, y, z);
    return point;
  }

  function hideTranslationControls() {
    image1.userData.transformControls.showX = true;
    image1.userData.transformControls.showY = true;
    image1.userData.transformControls.showZ = true;

    image2.userData.transformControls.showX = true;
    image2.userData.transformControls.showY = true;
    image2.userData.transformControls.showZ = true;

    image3.userData.transformControls.showX = true;
    image3.userData.transformControls.showY = true;
    image3.userData.transformControls.showZ = true;
  }

  function hideRotationControls(transformControls) {
    transformControls.showX = true;
    transformControls.showY = true;
    transformControls.showZ = true;
  }

  return (
    <div
    className='about-diagrama'
      ref={mountRef}
      style={{ width: "100%", height: "100vh" }}
    ></div>
  );
};

export default Diagrama;
