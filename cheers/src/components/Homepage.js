import React, {Component} from 'react';
import UserForm from './UserForm';
import Axios from 'axios';
import {BrowserRouter} from 'react-router';

class Homepage extends Component {

  constructor() {
    super();
    this.state = {
      user: null,
    }
  }

  static contextTypes = {
    router: React.PropTypes.object
  }

  login(email, password) {
    const data = {
      email: email,
      password: password
    }
    const self = this;
    // Axios({
    //   method: 'post',
    //   url: `http://localhost:9000/users/login`,
    //   data: data
    //   // responseType: 'json'
    // })
    Axios.post('http://localhost:9000/users/login', {email: email, password: password})
      .then(function(response) {
        console.log(response);
        // self.context.router.push({
        //      pathname: '/confirmation',
        //      state: {user: response}
        // })
        // self.setState({userEmail: response});

        self.props.history.push('/search');
// this.setState({user: response.config.data.email })
// self.setState({user: response});

// self.route();
  // return <Route path='/search' render={(response) => <Search user={response} />}/>
// console.log(response);

      // BrowserRouter.push({
      //     pathname: '/search',
      //     state: {userEmail: response}
      // });

 // http://stackoverflow.com/questions/36965790/react-invoke-redirect-to-page-and-pass-parameter
 //         this.context.router.push({
 //     pathname: '/confirmation',
 //     state: {email: this.state.email}
 // })
      })
      .catch(function(error) {
        if(error) {
          console.log("error", error);
          self.props.history.push('/signup');
        }
      })
  }

  render() {

    const submit = "Login";

    // if(this.state.user !== null){
      // this.props.history.push('/search');
    // }

      return(
        <div className="parent">
          <UserForm submit={submit} submitUserData={this.login.bind(this)} />
          <div className="homepage">
            <p>Not a member?</p>
            <a href='/signup'>Sign up</a>
          </div>
        </div>
      )
  }
}

export default Homepage;
