import React from 'react';
import { useData } from '../../../Context/Context';
import Project from '../Project/Project';
import Abstract from '../Abstract/Abstract';
import { HashLink as Link } from 'react-router-hash-link';

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
            <Abstract none={'none'} ver={
            <Link className='link-proyecto-completo' to={`/project/${row.c[7]?.v}`}><h4>Ver proyecto ⭷</h4></Link>} abstract={'abstract-favorites'} title={row.c[0]?.v} id={row.c[7]?.v} img={row.c[13]?.v}/>
          ]
          const id = row.c[7].v
          // Pasa el array de URLs como prop al componente Project
          return <Project  key={index} imageUrls={imageUrls} index={index} id={id} />;
        }
        // Si row.c[6]?.v no es 'V', no renderiza nada (puede retornar null o un componente vacío)
        return null;
      })}
    </section>
  );
};


export default Favorites;
