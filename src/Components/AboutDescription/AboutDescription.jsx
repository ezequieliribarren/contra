import React, { useRef  } from 'react';
import useScrollHandler from '../../js/useScrollHandler';

const AboutDescription = () => {

  const mySectionRef = useRef(null);
  const isScrolling = useScrollHandler(mySectionRef);

  return (
    <section id='about-description' ref={mySectionRef}>
            <div className="container-fluid about-description">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <p className='about-p'>
                            CONTRA es el resultado de 5 años de trabajo enfocado en construir arquitecturas /
                            situaciones urbanas que mejoren la ciudad, así como comunicar estrategias socioculturales
                            que lo posibilitan.
                        </p>
                        <p>
                            Malesuada sed eget amet amet morbi sit donec. Lacus nunc hendrerit at consectetur tellus nibh. Tortor molestie urna tellus ac purus tristique sed malesuada dictum. Faucibus at nibh ipsum semper sit etiam tincidunt. Donec dolor amet non duis ultrices. Viverra curabitur libero feugiat pellentesque ridiculus urna vulputate. Diam ut quam faucibus volutpat adipiscing at. Laoreet volutpat fringilla pulvinar neque aliquet volutpat lobortis. Mauris id aliquam vitae in tincidunt vulputate.
                        </p>
                        <p>
                            Tempus nibh mauris ut fermentum eu tellus non amet tellus. Vivamus quam suspendisse id id dapibus ullamcorper pharetra. Platea lobortis nisl id cras amet egestas fames mi. Non dolor facilisis aliquet eros. Sed tristique orci nunc non arcu lacus ac fermentum tempus. Scelerisque mauris ornare pretium habitant vestibulum netus hendrerit. Sit cursus lacinia fringilla viverra sit diam sit quis. Tortor eu est egestas porta tempor ultricies facilisis. Sit a facilisi ut viverra enim at. Maecenas phasellus accumsan phasellus diam dui integer aenean. Non arcu at senectus magna mi. Cursus morbi in tortor nunc massa faucibus tincidunt cras eget.
                        </p>

                        <a className='about-description-a' download='' href=""> Descarga nuestro dossier (.pdf)</a>
                    </div>
                    <div className="col-12 col-lg-6 about-grafic">
                        <img className='img-fluid' src="images/about/grafic.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutDescription