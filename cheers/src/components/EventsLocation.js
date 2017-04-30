import React, {Component} from 'react';
import PropTypes from 'prop-types';
import shouldPureComponentUpdate from 'react-pure-render/function';
// import beerMarker from '../img/marker.png';

import {
          // greatPlaceStyle,
          greatPlaceCircleStyle,
          // greatPlaceCircleStyleHover,
          greatPlaceStickStyle,
          // greatPlaceStickStyleHover,
          greatPlaceStickStyleShadow
        }
from './EventsLocationStyle';

export default class MyGreatPlace extends Component {
  static propTypes = {
    $hover: PropTypes.bool,
    title: PropTypes.string,
    zIndex: PropTypes.number
  };

  static defaultProps = {};

  shouldComponentUpdate = shouldPureComponentUpdate;

  infoWindow(id, eventName) {
    // console.log("hit infoWindow", id);
    const title = document.getElementById(id);
    if(title.style.display === "none") {
      title.style.display = "block";
      title.classList.add("info");
    } else {
      title.style.display = "none";
      title.classList.remove("info");
    }
  }

  render() {
    const {zIndex} = this.props;

    const style = {
      zIndex: this.props.$hover ? 1000 : zIndex
    };

   const circleStyle = greatPlaceCircleStyle;
    const stickStyle = greatPlaceStickStyle;

    return (
       <div style={style} onClick={() => this.infoWindow(this.props.id, this.props.title) }>
          <div style={greatPlaceStickStyleShadow} />
          <div style={circleStyle} />
          <div style={stickStyle} />
          <div id={this.props.id} style={{display: "none"}} >
            <div>Close</div>
            <p>{this.props.title}</p>
            <a href={this.props.url} target="_blank">More info</a>
          </div>
       </div>
    );
  }
}
