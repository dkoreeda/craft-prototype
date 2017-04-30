import React, { Component } from 'react';
import Form from './Form';
import Axios from 'axios';
import Style from './Style';
import '../App.css';
import CurrentStyle from './CurrentStyle';
import Navbar from './Navbar';
// import Suggestion from './Suggestion';
// import Location from './Location';
// import Maps from 'google-maps-react'

class SearchByStyle extends Component {

  constructor() {
    super();
    this.state = {
      beerStyles: [],
      currentStyle: null,
      suggestions: '',
      style_id: ''
    }
  }

  submission(style) {
    // console.log("submission", style);
    const self = this;
    Axios({
      method: 'get',
      url: `http://localhost:9000/style/${style}`
      // responseType: 'json'
    })
      .then(function(response) {
        // console.log(response);
        const results = response.data.data;
        self.setState({
          beerStyles: results,
          currentStyle: ''
        });
      })
      .catch(function(error) {
        if(error) {
          console.log("error", error);
        }
      })
  }

  selectStyle(style) {
    if(style) {
      this.setState({currentStyle: style});
    }
  }

  renderResults(results) {
    return results.map((style, index) => {
      // console.log("style", style);
        return <Style
                  key={index}
                  id={style.id}
                  name={style.name}
                  shortName={style.shortName}
                  abvMax={style.abvMax}
                  abvMin={style.abvMin}
                  category={style.category.name}
                  categoryId={style.categoryId}
                  srmMax={style.srmMax}
                  srmMin={style.srmMin}
                   {...this.props}

                  selectStyle={this.selectStyle.bind(this)}
                />
    })
  }

  renderCurrentStyle(currentStyle) {
    if(currentStyle !== null) {
      // this.setState({style_id: currentStyle})
      return <CurrentStyle style={currentStyle}/>
    }
  }

  render() {
    const searchByBeerStyle = "Which style are you looking for?";
    return (
      <div>
        <Navbar />
        <Form search={searchByBeerStyle} submitData={this.submission.bind(this)}/>
        <div>
          {this.renderCurrentStyle(this.state.currentStyle)}
        </div>
        <div className="beer-styles-results">
          {this.renderResults(this.state.beerStyles)}
        </div>
      </div>
    );
  }
}

export default SearchByStyle;
