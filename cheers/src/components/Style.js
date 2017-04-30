import React from 'react';

const Style = (props) => {
  return(
    <div className="select style" onClick={() => {props.selectStyle(props)}}>
      <h3>{props.name}</h3>
      <h5>{props.shortName}</h5>
    </div>
  );

}

export default Style;
