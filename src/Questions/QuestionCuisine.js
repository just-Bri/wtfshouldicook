import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../App/AppContext';

export default class QuestionCuisine extends Component {
  static contextType = AppContext;
  render() {
    return (
      <section className='cuisine-options-container'>
        <h3>What sounds good?</h3>
        <ul className='cuisine-options-list'>
          {/* S FIX */}
          {/* Refactor this to a function that pulls
              cuisine options from the database */}
          <li className='cuisine-option'>
            <button
              onClick={e => {
                this.context.updateCuisine(e, 'american');
              }}
            >
              <Link to='/complexity'>American</Link>
            </button>
          </li>
          <li className='cuisine-option'>
            <Link
              to={{
                pathname: '/complexity',
                cuisine: 'British',
              }}
            >
              <button>British</button>
            </Link>
          </li>
          <li className='cuisine-option'>
            <Link
              to={{
                pathname: '/complexity',
                cuisine: 'Chinese',
              }}
            >
              <button>Chinese</button>
            </Link>
          </li>
          <li className='cuisine-option'>
            <Link to={{ pathname: '/complexity', cuisine: 'French' }}>
              <button>French</button>
            </Link>
          </li>
          <li className='cuisine-option'>
            <Link to={{ pathname: '/complexity', cuisine: 'Indian' }}>
              <button>Indian</button>
            </Link>
          </li>
          <li className='cuisine-option'>
            <Link
              to={{
                pathname: '/complexity',
                cuisine: 'Italian',
              }}
            >
              <button>Italian</button>
            </Link>
          </li>
          {/* E FIX */}
        </ul>
      </section>
    );
  }
}
