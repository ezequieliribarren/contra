import React, { createContext, useContext, useEffect, useState } from 'react';

function generarEnlaceConParametros(sheetId) {
  var spreadsheetId = "1ZqyNJaWT6MtzdJ5FyNaqKLaKt3k3bz0bTZc0mAVl9kw";
  var enlace = `https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=out:json&gid=${sheetId}`;
  return enlace;
}

// Para la primer hoja
function generarEnlaceConParametros1() {
  return generarEnlaceConParametros("0");
}

// Para la segunda hoja
function generarEnlaceConParametros2() {
  return generarEnlaceConParametros("807077484");
}

// Para la tercera hoja
function generarEnlaceConParametros3() {
  return generarEnlaceConParametros("547037425");
}

// Para la cuarta hoja
function generarEnlaceConParametros4() {
  return generarEnlaceConParametros("1211401125");
}

<<<<<<< HEAD
function generarEnlaceConParametros(sheetId) {
  var spreadsheetId = "1ZqyNJaWT6MtzdJ5FyNaqKLaKt3k3bz0bTZc0mAVl9kw";
  var enlace = `https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=out:json&gid=${sheetId}`;
  return enlace;
}

// Para la primer hoja
function generarEnlaceConParametros1() {
  return generarEnlaceConParametros("0");
}

// Para la segunda hoja
function generarEnlaceConParametros2() {
  return generarEnlaceConParametros("807077484");
}

// Para la tercera hoja
function generarEnlaceConParametros3() {
  return generarEnlaceConParametros("547037425");
}

// Para la cuarta hoja
function generarEnlaceConParametros4() {
  return generarEnlaceConParametros("1211401125");
}

=======
>>>>>>> d4a0c314d5728a87b15df62211e8ca3de37b5f23
const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const enlaceHoja1 = generarEnlaceConParametros1();

    const fetchData = async () => {
      try {
        const response = await fetch(enlaceHoja1);
        const textData = await response.text();
        const jsonData = textData.substring(47, textData.length - 2);
        const parsedData = JSON.parse(jsonData);
        setData(parsedData.table.rows);
      } catch (error) {
        console.error('Error al obtener datos desde Google Sheets:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};

const SecondDataContext = createContext();

export const SecondDataProvider = ({ children }) => {

  const [secondData, setSecondData] = useState([]);

  useEffect(() => {
    const enlaceHoja2 = generarEnlaceConParametros2();

    const fetchSecondData = async () => {
      try {
        const response = await fetch(enlaceHoja2);
        const textData = await response.text();
        const jsonData = textData.substring(47, textData.length - 2);
        const parsedData = JSON.parse(jsonData);
        setSecondData(parsedData.table.rows);
      } catch (error) {
        console.error('Error al obtener datos desde la segunda hoja de cálculo:', error);
      }
    };

<<<<<<< HEAD
    // ¡Falta esta línea!
=======
>>>>>>> d4a0c314d5728a87b15df62211e8ca3de37b5f23
    fetchSecondData();
  }, []); 

  return (
    <SecondDataContext.Provider value={secondData}>
      {children}
    </SecondDataContext.Provider>
  );
};

export const useSecondData = () => {
  return useContext(SecondDataContext);
};

// Contexto para el tercer conjunto de datos
const ThirdDataContext = createContext();

export const ThirdDataProvider = ({ children }) => {
  const [thirdData, setThirdData] = useState([]);

  useEffect(() => {
    const enlaceHoja3 = generarEnlaceConParametros3();

    const fetchThirdData = async () => {
      try {
        const response = await fetch(enlaceHoja3);
        const textData = await response.text();
        const jsonData = textData.substring(47, textData.length - 2);
        const parsedData = JSON.parse(jsonData);
        setThirdData(parsedData.table.rows);
      } catch (error) {
        console.error('Error al obtener datos desde la tercera hoja de cálculo:', error);
      }
    };

    // ¡Falta esta línea!
    fetchThirdData();
  }, []); 

  return (
    <ThirdDataContext.Provider value={thirdData}>
      {children}
    </ThirdDataContext.Provider>
  );
};

export const useThirdData = () => {
  return useContext(ThirdDataContext);
};

// Contexto para el cuarto conjunto de datos
const FourDataContext = createContext();
<<<<<<< HEAD
=======

export const FourDataProvider = ({ children }) => {
  const [fourData, setFourData] = useState([]);

  useEffect(() => {
    const enlaceHoja4 = generarEnlaceConParametros4();

    console.log("Enlace Hoja 4:", enlaceHoja4); // Agrega este log para verificar el enlace generado.

    const fetchFourData = async () => {
      try {
        const response = await fetch(enlaceHoja4);
        const textData = await response.text();
        const jsonData = textData.substring(47, textData.length - 2);
        const parsedData = JSON.parse(jsonData);
        setFourData(parsedData.table.rows);
        console.log("Datos de la Hoja 4:", parsedData.table.rows); // Agrega este log para verificar los datos obtenidos.
      } catch (error) {
        console.error('Error al obtener datos desde la cuarta hoja de cálculo:', error);
      }
    };

    fetchFourData();
  }, []); 

  return (
    <FourDataContext.Provider value={fourData}>
      {children}
    </FourDataContext.Provider>
  );
};
export const useFourData = () => {
  return useContext(FourDataContext);
};
>>>>>>> d4a0c314d5728a87b15df62211e8ca3de37b5f23

export const FourDataProvider = ({ children }) => {
  const [fourData, setFourData] = useState([]);

  useEffect(() => {
    const enlaceHoja4 = generarEnlaceConParametros4();

<<<<<<< HEAD
    console.log("Enlace Hoja 4:", enlaceHoja4); // Agrega este log para verificar el enlace generado.

    const fetchFourData = async () => {
      try {
        const response = await fetch(enlaceHoja4);
        const textData = await response.text();
        const jsonData = textData.substring(47, textData.length - 2);
        const parsedData = JSON.parse(jsonData);
        setFourData(parsedData.table.rows);
        console.log("Datos de la Hoja 4:", parsedData.table.rows); // Agrega este log para verificar los datos obtenidos.
      } catch (error) {
        console.error('Error al obtener datos desde la cuarta hoja de cálculo:', error);
      }
    };

    fetchFourData();
  }, []); 

  return (
    <FourDataContext.Provider value={fourData}>
      {children}
    </FourDataContext.Provider>
  );
};
export const useFourData = () => {
  return useContext(FourDataContext);
};
=======
const GifsContext = createContext();

export const GifsProvider = ({ children, onLoad }) => {
  const [preloadedGifs, setPreloadedGifs] = useState([]);

  useEffect(() => {
    const enlaceHoja1 = generarEnlaceConParametros1();
    const fetchGifs = async () => {
      try {
        // Realiza la lógica para obtener los GIFs
        const response = await fetch(enlaceHoja1);
        const textData = await response.text();
        const jsonData = textData.substring(47, textData.length - 2);
        const parsedData = JSON.parse(jsonData);

        console.log("Datos de gif:", parsedData.table.rows);

        // Modifica esta parte para adaptarla a la estructura de tu JSON
        const gifs = parsedData.table.rows.map((row) => row.c[22]?.v).filter(Boolean);
        setPreloadedGifs(gifs);

        console.log('GIFs:', gifs);
        if (typeof onLoad === 'function') {
          onLoad(); // Llama a la función onLoad solo si es una función
        }
      } catch (error) {
        console.error('Error fetching GIFs:', error);
      }
    };

    fetchGifs();
  }, [onLoad]);

  return <GifsContext.Provider value={preloadedGifs}>{children}</GifsContext.Provider>;
};

export const useGifs = () => {
  return useContext(GifsContext);
};
>>>>>>> d4a0c314d5728a87b15df62211e8ca3de37b5f23
