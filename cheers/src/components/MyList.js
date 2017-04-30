import React, {Component} from 'react';
import Navbar from './Navbar';
import Axios from 'axios';
// import Beer from './Beer';

class MyList extends Component {

  constructor() {
    super();
    this.state = {
      user_id: '',
      list: ''
    }
  }

  componentDidMount() {
    const self = this;
    Axios({
      method: 'get',
      url: `http://localhost:9000/users/user`,
      // responseType: 'json'

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

  myList(userId) {
    const self = this;
    Axios({
      method: 'get',
      url: `http://localhost:9000/beers/${userId}`
      // responseType: 'json'
    })
      .then(function(response) {
        console.log(response);
        // console.log("hey");
        // self.setState({list: response.data});
      })
      .catch(function(error) {
        if(error) {
          console.log("error", error);
        }
      })
  }

  renderList(beers) {
    console.log(beers)
    if(beers) {
      return beers.map((beer, index) => {
        return
        <div className="select beer">
          <h3>{beer.name}</h3>
          <img src={beer.icon} alt="beer icon" />
        </div>

      })
    }
  }


  render() {
    console.log(this.state.user_id);
    return(
      <div>
        <Navbar />
        {this.myList(this.state.user_id)}
        {this.renderList(this.state.list)}
      </div>

      )
  }
}

export default MyList;
