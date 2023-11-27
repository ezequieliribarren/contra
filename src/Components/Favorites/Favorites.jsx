import React, { useState, useEffect } from 'react';
import { useData } from '../../../Context/Context';
import Project from '../Project/Project';
import LastFavorite from '../LastFavorite/LastFavorite';
import { HashLink as Link } from 'react-router-hash-link';
import { GridLoader } from 'react-spinners';

const Favorites = () => {
  const [loading, setLoading] = useState(true);
  const data = useData() ?? [];

  useEffect(() => {
    setLoading(true);
    if (data && data.length > 0) {
      setLoading(false);
    }
  }, [data]);

  return (
    <section id='favorites'>
      {loading ? (
        <div className="spinner-container">
          <GridLoader color={'#E3570D'} size={20} loading={loading} />
        </div>
      ) : (
        data.map((row, index) => {
          if (row.c[8]?.v === 'V' && row.c[9]?.v && row.c[10]?.v && row.c[11]?.v && row.c[12]?.v && row.c[13]?.v && row.c[14]?.v) {
            const imageUrls = [
              row.c[10]?.v,
              row.c[11]?.v,
              row.c[12]?.v,
              row.c[13]?.v,
              row.c[14]?.v,
              <LastFavorite
                ver={
                  <Link className='link-proyecto-completo' to={`/project/${row.c[9]?.v}`}>
                    <h4>Ver proyecto ⭷</h4>
                  </Link>
                }
                title={row.c[0]?.v}
                id={row.c[9]?.v}
                img={row.c[13]?.v}
              />
            ];
            const id = row.c[9]?.v;
            return <Project key={index} imageUrls={imageUrls} index={index} id={id} scrollTo={scrollTo} />;
          }
          return null;
        })
      )}
    </section>
  );
};

export default Favorites;
