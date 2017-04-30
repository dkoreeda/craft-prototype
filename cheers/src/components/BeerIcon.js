import React, {Component} from 'react';
import beer from '../img/beer.png';
import SearchBeer from './SearchBeer';

class BeerIcon extends Component {
  render() {
    return (
      <a href="/search/beer" className="icons">
        <img  src={beer} alt="beer" />
        <p className="search-name"> Beer </p>
      </a>
    )
  }
}

export default BeerIcon;
