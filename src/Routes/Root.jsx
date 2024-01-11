// Root.js
import React, { useState, useEffect } from 'react';
import Favorites from '../Components/Favorites/Favorites';
import Nav from '../Components/Nav/Nav';
import Footer from '../Components/Footer/Footer';
import Nav3 from '../Components/Nav3/Nav3';
import WorkMobile from '../Components/WorkMobile/WorkMobile';
import CallActionWork from '../Components/CallActionWork/CallActionWork';
import FavoritesMobile from '../Components/FavoritesMobile/FavoritesMobile';
import Preloader from '../Components/Preloader/Preloader';
import Slider from '../Components/Slider/Slider';
import SliderMobile from '../Components/SliderMobile/SliderMobile';
import { GifsProvider } from '../../Context/Context';


const Root = () => {
  const [isWhatOpen, setIsWhatOpen] = useState(false);
  const [preloaderVisible, setPreloaderVisible] = useState(true);

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
    <>
   <GifsProvider />
      <Preloader visible={preloaderVisible} onLoaded={() => window.scrollTo(0, 0)} />
      <Nav
        mitad="mitad"
        nav="top-left-button"
        img="images/logo-white.png"
        work="fixed"
        about="fixed"
        more="fixed"
        customClass={'hidden'}
        blend='blend'
      />
      <Nav3 isWhatOpen={isWhatOpen} setIsWhatOpen={setIsWhatOpen} burguer='images/burguer-white.png' to='#contact' />
      <div className="desktop-only">
        <Slider />
        <Favorites />
      </div>
      <div className="mobile-only">
        <SliderMobile />
        <FavoritesMobile />
        <CallActionWork />
        <WorkMobile />
      </div>
      <Footer background='background-home' color='background-home' logo='images/logo-footer.png' contact='contact' />
    </>
  );
};

export default Root;