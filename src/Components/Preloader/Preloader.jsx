// Preloader.js
import React, { useEffect, useState } from 'react';
import { useSecondData } from '../../../Context/Context';

const Preloader = () => {
  const secondData = useSecondData();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  const images = secondData.map((item) => item.c[5]?.v).filter(Boolean);
  console.log("Images" + images)

  useEffect(() => {
    let intervalId;

    const startImageRotation = () => {
      intervalId = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
    };

    startImageRotation();

    const hidePreloaderTimeout = setTimeout(() => {
      clearInterval(intervalId);
      setVisible(false);
    }, 3000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(hidePreloaderTimeout);
    };
  }, [images]);

  return (
    <div className={`preloader-container ${visible ? '' : 'loaded'}`}>
      <img src="images/insta.png" alt="" />
    </div>
  );
};

export default Preloader;
