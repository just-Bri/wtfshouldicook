import React, { Component } from 'react';
import AppContext from '../App/AppContext';

export default class Recipe extends Component {
  static contextType = AppContext;
  render() {
    return <div>{this.context.apiResult}</div>;
  }
}
