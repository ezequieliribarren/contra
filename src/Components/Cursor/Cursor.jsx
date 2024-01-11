import React, { useState, useEffect } from 'react';

const Cursor = ({ isHovered, blendMode, isLarge, isLarge3}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', updatePosition);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
    };
  }, []);

  return (
    <div
      className={`cursor ${isHovered ? 'large' : ''} ${isLarge ? 'large2' : ''} ${isLarge3 ? 'large3' : ''}  `}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        mixBlendMode: blendMode,
      }}
    ></div>
  );
};

export default Cursor;