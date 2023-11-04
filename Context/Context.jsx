import React, { createContext, useContext, useState, useEffect } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://docs.google.com/spreadsheets/d/1ZqyNJaWT6MtzdJ5FyNaqKLaKt3k3bz0bTZc0mAVl9kw/gviz/tq?tqx=out:json&gid=0');
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
    const fetchSecondData = async () => {
      try {
        // Lógica para obtener datos de la segunda hoja de cálculo
        const response = await fetch('https://docs.google.com/spreadsheets/d/1ZqyNJaWT6MtzdJ5FyNaqKLaKt3k3bz0bTZc0mAVl9kw/gviz/tq?tqx=out:json&gid=1917340270');
        const textData = await response.text();
        const jsonData = textData.substring(47, textData.length - 2);
        const parsedData = JSON.parse(jsonData);
        setSecondData(parsedData.table.rows);
      } catch (error) {
        console.error('Error al obtener datos desde la segunda hoja de cálculo:', error);
      }
    };

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


const ThirdDataContext = createContext();

export const ThirdDataProvider = ({ children }) => {
  const [thirdData, setThirdData] = useState([]);

  useEffect(() => {
    const fetchThirdData = async () => {
      try {
        const response = await fetch('https://docs.google.com/spreadsheets/d/1ZqyNJaWT6MtzdJ5FyNaqKLaKt3k3bz0bTZc0mAVl9kw/gviz/tq?tqx=out:json&gid=547037425');
        const textData = await response.text();
        console.log(textData)

        const jsonData = textData.substring(47, textData.length - 2);
        const parsedData = JSON.parse(jsonData);
        setThirdData(parsedData.table.rows);
      } catch (error) {
        console.error('Error al obtener datos desde la tercera hoja de cálculo:', error);
      }
    };

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