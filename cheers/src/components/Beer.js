import React, { Component } from 'react';

class Beer extends Component {
  render() {
    return(
      <div className="select beer" onClick={() => {this.props.selectBeer(this.props)}}>
        <h3>{this.props.name}</h3>
        <img src={this.props.icon} alt="beer icon" />
      </div>
    );
  }

}

export default Beer;
