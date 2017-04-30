import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
// import shouldPureComponentUpdate from 'react-pure-render/function';
// import PropTypes from 'prop-types';
import Place from './EventsLocation';

class Maps extends Component {
  // static propTypes = {
  //   center: PropTypes.array,
  //   zoom: PropTypes.number,
  //   greatPlaceCoords: PropTypes.any,
  //   hoverKey: PropTypes.string
  // };

  // shouldComponentUpdate = shouldPureComponentUpdate;

  // constructor(props) {
  //   super(props);
  // }

  // save(event) {

  // }

  renderLocations(locations) {
    return locations.map((event, index) => {
      console.log("event info", event);
      return <Place
                  key={index}
                  id={index}
                  lat={event.latitude}
                  lng={event.longitude}
                  zIndex={index}
                  title={event.title}
                  url={event.url}
                  // save={this.save.bind(this)}
                  />
    })
  }

  render() {
    const zoom = 11;
    return (
      <GoogleMapReact className="map"
        center={this.props.init}
        zoom={zoom}
        >
        {this.renderLocations(this.props.center)}
      </GoogleMapReact>

    );
  }
}

export default Maps;
