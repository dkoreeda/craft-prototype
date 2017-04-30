import React, {Component} from 'react';
import Navbar from './Navbar';
import Axios from 'axios';
import BeerIcon from './BeerIcon';
import StyleIcon from './StyleIcon';
import EventIcon from './EventIcon';


class Search extends Component {

  constructor() {
    super();
    this.state = {
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

  render() {
    console.log(this.state.user_id);
    return(
      <div>
        <Navbar/>
        <div className="search">
          <BeerIcon userId={this.state.user_id} />
          <StyleIcon userId={this.state.user_id} />
          <EventIcon userId={this.state.user_id} />
        </div>
      </div>

    );
  }
}

export default Search;
