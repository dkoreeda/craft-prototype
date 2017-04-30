import React from 'react';
import style from '../img/beer_style.png';

const StyleIcon = () => {
  return (
              <a href="/search/style" className="icons">
            <img  src={style} alt="beer" />
            <p className="search-name"> Style </p>
          </a>
    )
}

export default StyleIcon;
