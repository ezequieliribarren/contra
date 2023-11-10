import React, { createContext, useContext, useState, useEffect } from 'react';

// function generarEnlaceConParametros() {
//   // Esta función debe devolver el enlace generado dinámicamente
//   // Puedes mantenerla como está o modificarla según tus necesidades
//   var spreadsheetId = "1ZqyNJaWT6MtzdJ5FyNaqKLaKt3k3bz0bTZc0mAVl9kw";
//   var sheetId = "0";
//   var enlace = "https://docs.google.com/spreadsheets/d/" + spreadsheetId + "/gviz/tq?tqx=out:json&gid=" + sheetId;
//   return enlace;
// }


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
  return generarEnlaceConParametros("1917340270");
}

// Para la tercera hoja
function generarEnlaceConParametros3() {
  return generarEnlaceConParametros("547037425");
}

// Para la cuarta hoja
function generarEnlaceConParametros4() {
  return generarEnlaceConParametros("1211401125");
}
const enlaceHoja1 = generarEnlaceConParametros1();
const enlaceHoja2 = generarEnlaceConParametros2();
const enlaceHoja3 = generarEnlaceConParametros3();
const enlaceHoja4 = generarEnlaceConParametros4();



const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const enlace = enlaceHoja1
        const response = await fetch(enlace);
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
  const storedSecondData = localStorage.getItem('mySecondDataKey');
  const [secondData, setSecondData] = useState(storedSecondData ? JSON.parse(storedSecondData) : []);

  useEffect(() => {
    const fetchSecondData = async () => {
      try {
        const enlace = enlaceHoja2
        const response = await fetch(enlace);
        const textData = await response.text();
        const jsonData = textData.substring(47, textData.length - 2);
        const parsedData = JSON.parse(jsonData);
        setSecondData(parsedData.table.rows);
        localStorage.setItem('mySecondDataKey', JSON.stringify(parsedData.table.rows));
      } catch (error) {
        console.error('Error al obtener datos desde la segunda hoja de cálculo:', error);
      }
    };

    if (!storedSecondData) {
      fetchSecondData();
    }
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
  const storedThirdData = localStorage.getItem('myThirdDataKey');
  const [thirdData, setThirdData] = useState(storedThirdData ? JSON.parse(storedThirdData) : []);

  useEffect(() => {
    const fetchThirdData = async () => {
      try {
        const enlace = enlaceHoja3
        const response = await fetch(enlace);
        const textData = await response.text();
        const jsonData = textData.substring(47, textData.length - 2);
        const parsedData = JSON.parse(jsonData);
        setThirdData(parsedData.table.rows);
        localStorage.setItem('myThirdDataKey', JSON.stringify(parsedData.table.rows));
      } catch (error) {
        console.error('Error al obtener datos desde la tercera hoja de cálculo:', error);
      }
    };

    if (!storedThirdData) {
      fetchThirdData();
    }
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


const FourDataContext = createContext();
export const FourDataProvider = ({ children }) => {
  const storedFourData = localStorage.getItem('myFourdDataKey');
  const [fourData, setFourData] = useState(storedFourData ? JSON.parse(storedFourData) : []);

  useEffect(() => {
    const fetchFourData = async () => {
      try {
        const enlace = enlaceHoja4
        const response = await fetch(enlace);
        const textData = await response.text();
        const jsonData = textData.substring(47, textData.length - 2);
        const parsedData = JSON.parse(jsonData);
        setFourData(parsedData.table.rows);
        localStorage.setItem('myFourdDataKey', JSON.stringify(parsedData.table.rows));
      } catch (error) {
        console.error('Error al obtener datos desde la tercera hoja de cálculo:', error);
      }
    };

    if (!storedFourData) {
      fetchFourData();
    }
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



