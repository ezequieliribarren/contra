import React, { useState, useEffect } from 'react';

const Cursor = ({ isHovered, blendMode, isLarge, isLarge3 }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isCursorChangue, setIsCursorChangue] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      const isChangue = document.elementFromPoint(e.clientX, e.clientY)?.classList.contains('cursor-changue');
      setIsCursorChangue(isChangue);
    };

    document.addEventListener('mousemove', updatePosition);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
    };
  }, []);

  return (
    <div
      className={`cursor ${isHovered ? 'large' : ''} ${isLarge ? 'large2' : ''} ${isLarge3 ? 'large3' : ''} ${isCursorChangue ? 'cursor-changue' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        mixBlendMode: blendMode,
        backgroundImage: isCursorChangue ? 'url("https://res.cloudinary.com/domktwtar/image/upload/v1704305866/LOGOS/logo-white_uiu6sl.png")' : 'none',
        backgroundSize: isCursorChangue ? 'contain' : 'auto',
        backgroundRepeat: isCursorChangue ? 'no-repeat' : 'auto',
        backgroundPosition: isCursorChangue ? 'center center' : 'auto',
        width: isCursorChangue ? '250px' : '', 
        height: isCursorChangue ? '55px' : '', 
      }}
    ></div>
  );
};

export default Cursor;
