import React, { Component } from 'react';
import AppContext from '../App/AppContext';

export default class Recipe extends Component {
  static contextType = AppContext;
  render() {
    return (
      <section>
        {this.context.recipeToDisplay}
        <h3>$Recipe Name</h3>
        <p>maybe a picture</p>
        {/* Refactor this to come from API obviously */}
        <h3>Ingredients</h3>
        <ul className='ingredients-list'>
          <li className='ingredient'>$one</li>
          <li className='ingredient'>$two</li>
          <li className='ingredient'>$three</li>
          <li className='ingredient'>$four</li>
          <li className='ingredient'>$etc</li>
        </ul>
        <h3>Hardware(if needed)</h3>
        <ul className='hardware-list'>
          <li className='hardware'>$one</li>
        </ul>
        <h3>Prep Time: $minutes</h3>
        <h3>Cook Time: $minutes</h3>
        <h3>Total Time: $minutes</h3>
        <p>instructions etc go here</p>
      </section>
    );
  }
}
