import React from 'react';

const LastFavorite = ({ title, id, img, ver }) => {
    return (
      <div id={id} className="last-favorites" style={{ backgroundImage: `url(${img})`, zIndex: 2 }}>
        <div className="shadow-overlay"></div>
        <div className="hover-content">
          <h2 className="abstract-h2">{title}</h2>
        </div>

        <div className='hover-content'>{ver}</div>

      </div>
    );
  };
  
  export default LastFavorite;