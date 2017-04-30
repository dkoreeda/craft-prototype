import React, { Component } from 'react';

export class Container extends Component {
  render() {
    if(!this.props.loaded) {
      return <div> Loading... </div>
    }
    return(
      <div> Map will go here </div>
      )
  }
}

export default GoogleApiComponent({
  apikey: AIzaSyCmXWIHpnA-fIuLrqfzr9PaeonezFtnmm4
})(Container)
