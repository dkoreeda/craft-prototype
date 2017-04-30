import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      input: ''
    }
  }

  handleChange(e) {
    // console.log(e.target.value);
    this.setState({input: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    // console.log(this.state.input);
    this.props.submitData(this.state.input);
    this.setState({input: ''});
  }

  render() {
    return(
      <div className="form-style">
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>
            <input
              type="text"
              value={this.state.input}
              onChange={(e) => this.handleChange(e)}
              placeholder={this.props.search}
            />
          </label>
          <input className="submit" type="submit" value="Search" />
        </form>
      </div>
    );
  }
}

export default Form;
