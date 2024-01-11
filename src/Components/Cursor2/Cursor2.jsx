import React, { useState, useEffect } from 'react';

const Cursor2 = ({ isHovered, blendMode, position }) => {
  const [cursorPosition, setCursorPosition] = useState(position);

  useEffect(() => {
    setCursorPosition(position);
  }, [position]);

  return (
    <div
      className={`cursor ${isHovered ? 'large' : ''} ${cursorPosition}`}
      style={{
        mixBlendMode: blendMode,
      }}
    ></div>
  );
};

export default Cursor2;
