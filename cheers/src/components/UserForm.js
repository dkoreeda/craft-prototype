import React, {Component} from 'react';

class UserForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChangeEmail(e) {
    // console.log(e.target.value);
    this.setState({email: e.target.value});
  }

  handleChangePassword(e) {
    // console.log(e.target.value);
    this.setState({password: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    // console.log(this.state.email);
    const email = this.state.email;
    const password = this.state.password;
    this.props.submitUserData(email, password);
    // this.setState({input: ''});
  }

  render() {
    return(
      <div className="form-style">
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>
            Email:
            <input
              id="email"
              type="text"
              name="user[email]"
              placeholder="john.doe@example.com"
              value={this.state.email}
              onChange={(e) => this.handleChangeEmail(e)}
            />
          </label>
          <label>
            Password:
            <input
              id="password"
              type="password"
              name="user[password]"
              placeholder="**********"
              value={this.state.password}
              onChange={(e) => this.handleChangePassword(e)}
            />
          </label>
          <input className="submit" type="submit" value={this.props.submit} />
        </form>
      </div>
    );
  }
}

export default UserForm;
