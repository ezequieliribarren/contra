import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const CambiarCursor = ({ direction }) => {
  const getCursor = () => {
    if (direction === 'left') {
      return `url("data:image/svg+xml;base64,[data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDEyIDEyIj4KICA8Zz4KICAgIDxwYXRoIGQ9Ik0wLDEyCkwuMDk5LDAuMDk5bC0uNDA4LjQwOGwuMzI4LjMyOGwuNDA4LDAuMDk5LDAuMDk5bC0uNDA4LjQwOGwuMzI4LjMyOC0uNDA4LDAuMDk5TDAuMDk5LDEyegoiLz4KPC9nPgo8L3N2Zz4=]") 12 12, auto`;
    } else if (direction === 'right') {
      return `url("data:image/svg+xml;base64,[data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDEyIDEyIj4KICA8Zz4KICAgIDxwYXRoIGQ9Ik0xMiwwTDAsMTJMLTAuMDk5LDAuMDk5bC0uNDA4LjQwOGwuMzI4LjMyOC0uNDA4LDAuMDk5TDAuMDk5LDEyeiIvPjwvZz4KPC9zdmc+Cg==
    ]") 12 12, auto`;
    } else {
      return 'auto';
    }
  };

  return (
    <FontAwesomeIcon icon={direction === 'left' ? faArrowLeft : faArrowRight} style={{ cursor: getCursor() }} />
  );
};

export default CambiarCursor;