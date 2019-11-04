import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../App/AppContext';

export default class QuestionOpening extends Component {
  static contextType = AppContext;
  render() {
    return (
      <section className='opening-question'>
        <h3>Answer a few simple questions and get a recipe!</h3>
        <label>Craving a certain cuisine?</label>
        <button
          className='answer-button'
          onClick={e => {
            this.context.updateCraving(e, 'yes');
          }}
        >
          <Link to='/cuisine'>Yes!</Link>
        </button>
        <button
          className='answer-button'
          onClick={e => {
            this.context.updateCraving(e, 'no');
          }}
        >
          <Link to='/complexity'>No.</Link>
        </button>
      </section>
    );
  }
}
