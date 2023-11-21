import React, { useEffect } from 'react';
import * as THREE from 'three';

const GraficoThree = () => {
  useEffect(() => {
    // Creamos una escena
    const scene = new THREE.Scene();

    // Creamos una cámara
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Creamos un renderizador
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Datos de skills
    const skills = [
      'Gestión de Proyectos',
      'Dirección de Obra',
      'Visualización 3D',
      'Conceptualización',
      'Ejecución y Proveedores',
      'Gestión de Equipo',
      'Arte y Grafismos',
      'Planimetrías',
      'RRSS',
      'Web/UX',
      'Estrategias',
      'Finanzas',
      'Pipeline',
      'Gestión de Clientes',
    ];

    // Creamos líneas para cada habilidad
    skills.forEach((skill, index) => {
      const material = new THREE.LineBasicMaterial({ color: 0x00ff00 });
      const geometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(-5, index, 0),
        new THREE.Vector3(5, index, 0),
      ]);

      const line = new THREE.Line(geometry, material);
      scene.add(line);

      // Etiquetas
      const textGeo = new THREE.TextBufferGeometry(skill, {
        font: new THREE.FontLoader().load('helvetiker_regular.typeface.json'), // Reemplazar con la ubicación de tu fuente
        size: 0.2,
        height: 0.1,
      });

      const textMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      const textMesh = new THREE.Mesh(textGeo, textMaterial);
      textMesh.position.set(5.2, index, 0);
      scene.add(textMesh);
    });

    // Función de renderizado
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    // Manejo de redimensionamiento
    window.addEventListener('resize', () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(newWidth, newHeight);
    });

    // Iniciamos la animación
    animate();

    // Limpieza al desmontar el componente
    return () => {
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return null;
};

export default GraficoThree;
