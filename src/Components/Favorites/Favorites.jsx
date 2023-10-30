import React from 'react';
import { useData } from '../../../Context/Context';
import Project from '../Project/Project';

const Favorites = () => {
  const data = useData(); 

  return (
    <section id='favorites'>
      {data.map((row, index) => {
        // Verifica si row.c[6]?.v es 'V', si es así, renderiza la fila
        if (row.c[6]?.v === 'V') {
          // Crea un array de URLs de imágenes
          const imageUrls = [
            row.c[8]?.v,
            row.c[9]?.v,
            row.c[10]?.v,
            row.c[11]?.v,
            row.c[12]?.v,
            row.c[13]?.v,
            row.c[14]?.v,
          ]
          const id = row.c[7].v
          // Pasa el array de URLs como prop al componente Project
          return <Project key={index} imageUrls={imageUrls} index={index} id={id} />;
        }
        // Si row.c[6]?.v no es 'V', no renderiza nada (puede retornar null o un componente vacío)
        return null;
      })}
    </section>
  );
};


export default Favorites;
