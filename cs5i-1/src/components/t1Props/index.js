import React, { Component } from 'react';

// example of a stateless class component
class T1Props extends Component {
  state = {};
  render() {
    return <p>Hello {this.props.name}. How are you today</p>;
  }
}

export default T1Props;
