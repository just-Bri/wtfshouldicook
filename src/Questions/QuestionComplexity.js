import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../App/AppContext';

export default class QuestionComplexity extends Component {
  static contextType = AppContext;
  render() {
    return (
      <section className='complexity-options-container'>
        <h3 className='adventurous-header header'>Feeling adventorous?</h3>
        <ul className='complexity-options-list'>
          <li className='complexity-option'>
            <Link
              className='link-to-recipe'
              to='/recipe'
              onClick={e => {
                this.context.updateComplexity(e, 'yes');
              }}
            >
              Yes!
            </Link>
          </li>
          <li className='complexity-option'>
            <Link
              className='link-to-recipe'
              to='/recipe'
              onClick={e => {
                this.context.updateComplexity(e, 'no');
              }}
            >
              No.
            </Link>
          </li>
        </ul>
      </section>
    );
  }
}
