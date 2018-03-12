import React, { Component } from 'react';
import FeedTabs from './Tabs';
import { NavLink } from 'react-router-dom';

class Promo extends Component {
  render() {
    return(
      <div>
        <h1>Promo</h1>
        <NavLink to="/" activeClassName="is-active"> home </NavLink>
        <NavLink to="/feed" activeClassName="is-active"> feed </NavLink>
        <FeedTabs />
      </div>
    ); 
  }
}

export default Promo;