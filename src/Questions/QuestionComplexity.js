import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../App/AppContext';

export default class QuestionComplexity extends Component {
  static contextType = AppContext;
  render() {
    return (
      <section className='complexity-options-container'>
        <h3>Feeling adventorous?</h3>
        <ul className='complexity-options-list'>
          <li className='complexity-option'>
            <button
              onClick={e => {
                this.context.updateComplexity(e, 'yes');
              }}
            >
              <Link to='/recipe'>Yes!</Link>
            </button>
          </li>
          <li className='complexity-option'>
            <button
              onClick={e => {
                this.context.updateComplexity(e, 'no');
              }}
            >
              <Link to='/recipe'>No.</Link>
            </button>
          </li>
        </ul>
      </section>
    );
  }
}
