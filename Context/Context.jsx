import React, { createContext, useContext, useState, useEffect } from 'react';

// Contexto para el primer conjunto de datos
const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const storedData = localStorage.getItem('myDataKey');
  const [data, setData] = useState(storedData ? JSON.parse(storedData) : []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://docs.google.com/spreadsheets/d/1ZqyNJaWT6MtzdJ5FyNaqKLaKt3k3bz0bTZc0mAVl9kw/gviz/tq?tqx=out:json&gid=0');
        const textData = await response.text();
        const jsonData = textData.substring(47, textData.length - 2);
        const parsedData = JSON.parse(jsonData);
        setData(parsedData.table.rows);
        localStorage.setItem('myDataKey', JSON.stringify(parsedData.table.rows));
      } catch (error) {
        console.error('Error al obtener datos desde Google Sheets:', error);
      }
    };

    if (!storedData) {
      fetchData();
    }
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

// Contexto para el segundo conjunto de datos
const SecondDataContext = createContext();

export const SecondDataProvider = ({ children }) => {
  const storedSecondData = localStorage.getItem('mySecondDataKey');
  const [secondData, setSecondData] = useState(storedSecondData ? JSON.parse(storedSecondData) : []);

  useEffect(() => {
    const fetchSecondData = async () => {
      try {
        const response = await fetch('https://docs.google.com/spreadsheets/d/1ZqyNJaWT6MtzdJ5FyNaqKLaKt3k3bz0bTZc0mAVl9kw/gviz/tq?tqx=out:json&gid=1917340270');

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
        const response = await fetch('https://docs.google.com/spreadsheets/d/1ZqyNJaWT6MtzdJ5FyNaqKLaKt3k3bz0bTZc0mAVl9kw/gviz/tq?tqx=out:json&gid=547037425');
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






