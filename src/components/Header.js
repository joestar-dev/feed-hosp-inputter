import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => (
  <div className="header">
    <div className="container">
      <h1 className="header__title">{props.title}</h1>
      <h2 className="header__subtitle">{props.subtitle}</h2>
      {/* <div>
        <NavLink to="/" activeClassName="is-active" exact={true}>home </NavLink>
        <NavLink to="/feed" activeClassName="is-active" exact={true}>feed </NavLink>
        <NavLink to="/promo" activeClassName="is-active">promo </NavLink>
      </div> */}
    </div>
  </div>
   
);

Header.defaultProps = {
  title: 'Hospital Feed Inputter'
}

export default Header;