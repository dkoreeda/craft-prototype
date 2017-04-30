import React from 'react';

const CurrentEvent = (props) => {
  console.log("event", props);
  return(
    <div className="current">
      <h1> {props.name } </h1>
    </div>
    )
}

export default CurrentEvent;
