import { useState, useEffect } from 'react';
import Projects from '../Components/Projects/Projects';
import Nav from '../Components/Nav/Nav';
import Footer from '../Components/Footer/Footer';
import Nav3 from '../Components/Nav3/Nav3';
import WorkMobile from '../Components/WorkMobile/WorkMobile';


const Work = () => {
  const [isWhatOpen, setIsWhatOpen] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);


  function generarEnlaceConParametros(sheetId) {
    var spreadsheetId = "1ZqyNJaWT6MtzdJ5FyNaqKLaKt3k3bz0bTZc0mAVl9kw";
    var enlace = `https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=out:json&gid=${sheetId}`;
    return enlace;
  }

  // Para la primer hoja
  function generarEnlaceConParametros1() {
    return generarEnlaceConParametros("0");
  }

  useEffect(() => {
    const enlaceHoja1 = generarEnlaceConParametros1();

    const fetchAndPreloadGifs = async () => {
      try {
        const startTime = performance.now();
        // Realiza la lógica para obtener los GIFs
        const response = await fetch(enlaceHoja1);
        const textData = await response.text();
        const jsonData = textData.substring(47, textData.length - 2);
        const parsedData = JSON.parse(jsonData);

        console.log("Datos de gif:", parsedData.table.rows);

        // Modifica esta parte para adaptarla a la estructura de tu JSON
        const gifs = parsedData.table.rows.map((row) => row.c[22]?.v).filter(Boolean);

        console.log('GIFs:', gifs);

        // Realizar acciones después de cargar los GIFs
        // Marca el tiempo de finalización
        const endTime = performance.now();

        // Calcula el tiempo total en milisegundos
        const totalTime = endTime - startTime;
        console.log(`Tiempo total de descarga de GIFs: ${totalTime} ms`);
        console.log('GIFs cargados. Puedes realizar acciones adicionales aquí.');

        // Precargar las URLs de los GIFs en el encabezado del documento HTML
        gifs.forEach((url) => {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.as = 'image';
          link.href = url;
          document.head.appendChild(link);
        });

        // Ocultar el preloader después de cargar los GIFs
        setPreloaderVisible(false);
      } catch (error) {
        console.error('Error fetching GIFs:', error);
      }
    };

    fetchAndPreloadGifs();
  }, []);


  useEffect(() => {
    // Scroll al principio de la página después de 100 ms
    const scrollToTop = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);

    // Ocultar el preloader después de 150 ms
    const hidePreloader = setTimeout(() => {
      setPreloaderVisible(false);
    }, 3000);

    // Limpieza de los temporizadores al desmontar el componente
    return () => {
      clearTimeout(scrollToTop);
      clearTimeout(hidePreloader);
    };
  }, []);


  return (
    <main className='work'>
      <Nav nav='top-left-button' mitad="mitad" img='images/logo-white.png' work='orange fixed blend-none' more='fixed' about='fixed' />
      <Nav3 isWhatOpen={isWhatOpen} setIsWhatOpen={setIsWhatOpen} burguer='images/burguer-white.png' to='#contact-work' />
      <div className="desktop-only-work">
        <Projects />
      </div>
      <div className="mobile-only-work">
        <WorkMobile />
      </div>
      <Footer background='background-work' color='background-work' colora='black' logo='images/logo-footer-work.png' contact='contact-work' none='none' padding='padding-top' />
    </main>
  );
};

export default Work;