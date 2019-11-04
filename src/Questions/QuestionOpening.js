import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../App/AppContext';

export default class QuestionOpening extends Component {
  static contextType = AppContext;
  render() {
    return (
      <section className='opening-question'>
        <h3 className='opening-header header'>
          Answer a few simple questions and get a recipe!
        </h3>
        <label>Craving a certain cuisine?</label>
        <ul className='craving-options'>
          <li className='craving-option-container'>
            <Link
              className='link-to-cuisine'
              to='/cuisine'
              onClick={e => {
                this.context.updateCraving(e, 'yes');
              }}
            >
              Yes!
            </Link>
          </li>
          <li className='craving-option-container'>
            <Link
              className='link-to-complexity'
              to='/complexity'
              onClick={e => {
                this.context.updateCraving(e, 'no');
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
