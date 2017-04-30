import React, { Component } from 'react';
import Axios from 'axios';
import Suggestion from './Suggestion';

class CurrentBeer extends Component {

  constructor() {
    super();
    this.state = {
      suggestions: ''
    }
  }

  recommendations(style) {
    // console.log("Current beer component", beers);
    const self = this;
    Axios({
      method: 'get',
      url: `http://localhost:9000/beers/style/${style}`
      // responseType: 'json'
    })
      .then(function(response) {
        // console.log(response);
        const results = response.data.data;
        self.setState({suggestions: results});
      })
      .catch(function(error) {
        if(error) {
          console.log("error", error);
        }
      })

  }

  renderSuggestions(suggestions) {
    // console.log(suggestions);
    if(!suggestions){
      <p> Loading... </p>
    } else {
      return suggestions.map((beer, index) => {
        if(beer.style && beer.labels && (beer.abv || beer.ibu)){
          return <Suggestion
                      key={index}
                      name={beer.name}
                      icon={beer.labels.icon}
                      styleId={beer.styleId}
                      category={beer.style.category.name}
                      categoryId={beer.style.categoryId}
                      description={beer.description}
                      {...this.props}
                 />
        }
      });
    }
  }

  render() {
    // console.log("suggestion - current beer component", this.state.suggestion);
    return(
      <div className="button-style">
        <div className="current">
          <button onClick={() => {this.props.save(this.props)}}>Save</button>
          <h3>{this.props.currentBeer.name}</h3>
          <h5>{this.props.currentBeer.category}</h5>
          <img src={this.props.currentBeer.icon} alt="beer" />
          <p>{this.props.currentBeer.description}</p>
          <button onClick={() => {this.recommendations(this.props.currentBeer.styleId)}}> You may also like </button>
          {this.recommendations}
        </div>
        <div className="scrollmenu">
          {this.renderSuggestions(this.state.suggestions)}
        </div>

      </div>
    );
  }
}

export default CurrentBeer;
