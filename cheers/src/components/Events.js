import React from 'react';

const Events = (props) => {
  console.log("events", props);
  return(
      <div className="select style" onClick={() => {props.selectEvent(props)}}>
        <a href={props.result.url} target="_blank">
          <div>
            <h3>{props.name}</h3>
            <p>{props.result.venue_address} || {props.result.start_time}</p>
          </div>
        </a>
      </div>
    )
}

export default Events;
