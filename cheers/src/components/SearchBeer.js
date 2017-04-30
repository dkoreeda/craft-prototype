import React, { Component } from 'react';
import Form from './Form';
import Axios from 'axios';
import Beer from './Beer';
import '../App.css';
import CurrentBeer from './CurrentBeer';
import Navbar from './Navbar';

class SearchBeer extends Component {

  constructor() {
    super();
    this.state = {
      beerNames: [],
      currentBeer: null,
      recommendations: '',
      user_id: ''
    }
  }

  componentDidMount() {
    const self = this;
    Axios({
      method: 'get',
      url: `http://localhost:9000/users/user`,
      responseType: 'json'

    })
      .then(function(response) {
        console.log(response);
        // console.log("hey");
        self.setState({user_id: response.data});
      })
      .catch(function(error) {
        if(error) {
          console.log("error", error);
        }
      })
  }

  submission(beer) {
    // console.log("submission", beer);
    const self = this;
    Axios({
      method: 'get',
      url: `http://localhost:9000/${beer}`
      // responseType: 'json'
    })
      .then(function(response) {
        // console.log(response);
        const results = response.data.data;
        self.setState({
          beerNames: results,
          recommendations: '',
          currentBeer: null
        });
      })
      .catch(function(error) {
        if(error) {
          console.log("error", error);
        }
      })
  }

  selectBeer(beer) {
    // console.log("beer selected", beer);
    this.setState({ currentBeer: beer});
  }

  renderResults(results) {
    return results.map((beer, index) => {
      // console.log("beer", beer);
      if(beer.style && beer.labels && (beer.abv || beer.ibu)) {
        return <Beer
                  key={index}
                  name={beer.name}
                  icon={beer.labels.icon}
                  styleId={beer.styleId}
                  category={beer.style.category.name}
                  categoryId={beer.style.categoryId}
                  description={beer.description}
                   {...this.props}

                  selectBeer={this.selectBeer.bind(this)}
                />
      }
    })
  }

  save(beer) {
    const data = {
      beer: beer,
      user_id: this.state.user_id
    }
    const self = this;
    Axios({
      method: 'post',
      url: `http://localhost:9000/beers`,
      data: data
      // responseType: 'json'
    })
      .then(function(response) {
        console.log(response);
        // const results = response.data.data;
        // self.setState({beerNames: results});
      })
      .catch(function(error) {
        if(error) {
          console.log("error", error);
        }
      })
  }



  renderCurrentBeer(currentBeer) {
    // console.log(currentBeer);
    if(currentBeer !== null) {
      return <CurrentBeer currentBeer={currentBeer} save={this.save.bind(this)}/>
    }
  }

  render() {
    const searchByBeerName = "Which beer are you looking for?";
    return (
      <div className="search-beer">
        <Navbar />
        <Form search={searchByBeerName} submitData={this.submission.bind(this)} />
        <div className="scrollmenu">
          {this.renderResults(this.state.beerNames)}
        </div>
        {this.renderCurrentBeer(this.state.currentBeer)}

      </div>
    );
  }
}

export default SearchBeer;
