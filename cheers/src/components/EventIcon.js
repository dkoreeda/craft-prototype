import React from 'react';
import event from '../img/event.png';

const EventIcon = () => {
  return (
          <a href="/search/events" className="icons">
            <img  src={event} alt="beer" />
            <p className="search-name"> Events </p>
          </a>
    )
}

export default EventIcon;
