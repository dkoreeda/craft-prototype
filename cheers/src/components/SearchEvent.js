import React, {Component} from 'react';
import Form from './Form';
import Axios from 'axios';
import Events from './Events';
import Maps from './Maps';
import Navbar from './Navbar';
import CurrentEvent from './CurrentEvent';

class SearchEvent extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
      currentEvent: null,
      eventsInfo: [],
      center: ''
    }
  }

  submission(city) {
    // console.log("submission", style);
    const self = this;
    Axios({
      method: 'get',
      url: `http://localhost:9000/event/${city}`
      // responseType: 'json'
    })
      .then(function(response) {
        // console.log(response.data.events.event);
        const results = response.data.events.event;
        self.setState({events: results});
      })
      .catch(function(error) {
        if(error) {
          console.log("error", error);
        }
      })
  }

  selectEvent(event) {
    if(event) {
      this.setState({currentEvent: event});
    }
  }

  renderResults(results) {
    return results.map((result, index) => {
      console.log("style", result);
      return <Events
                key={index}
                name={result.title}
                result={result}
                 {...this.props}
                selectEvent={this.selectEvent.bind(this)}
              />
    })
  }

  renderCurrentEvent(currentEvent) {
    if(currentEvent !== null) {
      return <CurrentEvent event={currentEvent}/>
    }
  }

  changeClass() {
    // console.log("clicked");
    const map = document.querySelector('.map');
    const list = document.querySelector('.list');

    if(map.style.display === "none") {
      map.style.display = "block";
      list.style.display = "none";
      document.querySelector('.button').textContent = 'View List';
    } else {
      map.style.display = "none";
      list.style.display = "block";
      document.querySelector('.button').textContent = 'View Map';
    }
  }


  getTheButton() {
    return <button onClick={() => { this.changeClass()}} className="button">
                View List
           </button>;
  }

  render() {
    const button = this.getTheButton();
    const searchEvent = "Which city are you looking for?";
    const center = {
      lat: 40.7128,
      lng: -74.0059
    }
    // console.log("events", this.state.events);
    return (
      <div>
        <Navbar />
        <Form search={searchEvent} submitData={this.submission.bind(this)}/>
        {this.renderCurrentEvent(this.state.currentEvent)}
        <div className="results">
          <div className="button-style">
            {button}
          </div>
          <div className="list" style={{display: "none"}}>
            {this.renderResults(this.state.events)}
          </div>
        </div>
        <div className="map" style={{display: "block", width: 600, height:600}}>
           <Maps init={center} center={this.state.events} />
        </div>

      </div>
      )

  }
}

export default SearchEvent;
