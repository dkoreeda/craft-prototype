import React, { Component } from 'react';
import Axios from 'axios';
import Suggestion from './Suggestion';

class CurrentStyle extends Component {
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
        console.log(response);
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
    console.log(suggestions);
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
    console.log(this.props);
    return(
      <div className="button-style">
        <div className="current">
          <h3>{this.props.style.name}</h3>
          <h5>{this.props.style.shortName}</h5>
          <button onClick={() => {this.recommendations(this.props.style.id)}}>
            Beer brands suggestions
          </button>
        </div>
        <div className="scrollmenu">
          {this.renderSuggestions(this.state.suggestions)}
        </div>
      </div>

    )
  }
}

export default CurrentStyle;
