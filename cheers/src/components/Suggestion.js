import React from 'react';

const Suggestion = (props) => {
  return(
      <div className="beer">
        <h3>{props.name}</h3>
        <img src={props.icon} alt="beer icon" />
      </div>
    )

}

export default Suggestion;
