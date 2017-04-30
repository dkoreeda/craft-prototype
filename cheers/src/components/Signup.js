import React, {Component} from 'react';
import UserForm from './UserForm';
import Axios from 'axios';

class Signup extends Component {

  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }
  }

  signup(email, password) {
    const user = {
      email: email,
      password: password
    }
    const self = this;
    Axios({
      method: 'post',
      url: 'http://localhost:9000/users',
      data: user
      // responseType: 'json'
    })
      .then(function(response) {
        // console.log(response);
        self.props.history.push('/search');
        // const results = response.data.data;
        // self.setState({beerNames: results});
      })
      .catch(function(error) {
        if(error) {
          console.log("error", error);
          self.props.history.push('/signup');
        }
      })
  }


  render() {
    const submit = "Create"
    return(
      <div className="parent">
        <UserForm submit={submit} submitUserData={this.signup.bind(this)} />
      </div>
    )
  }
}

export default Signup;
