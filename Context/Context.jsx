import React, { createContext, useContext, useState, useEffect } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://docs.google.com/spreadsheets/d/1BcVPh5VrM0si2BmitEwU02vxcm6ONqKofqFCGMxSkww/gviz/tq?tqx=out:json&gid=0');
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
