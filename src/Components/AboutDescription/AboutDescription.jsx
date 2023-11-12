import React, { useRef } from 'react';
import useScrollHandler from '../../js/useScrollHandler';
import { useFourData } from '../../../Context/Context';

const AboutDescription = () => {
  const mySectionRef = useRef(null);
  const isScrolling = useScrollHandler(mySectionRef);
  const data = useFourData();

  return (
    <section id='about-description' ref={mySectionRef}>
      <div className="container-fluid about-description">
        <div className="row">
          <div className="col-12 col-lg-6 about-description-text">
            {data.slice(1).map((p, index) => (
              <React.Fragment key={index}>
                <p className='about-p'>{p.c[0]?.v}</p>
                <p>{p.c[1]?.v}</p>
                <p className='about-p3'>{p.c[2]?.v}</p>
              </React.Fragment>
            ))}
            <div>
              <a className='about-description-a' download='' href="">
                Descarga nuestro dossier (.pdf)
              </a>
            </div>
          </div>
          <div className="col-12 col-lg-6 about-grafic">
            <img className='img-fluid' src="images/about/grafic.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutDescription;
