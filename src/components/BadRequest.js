import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

const BadRequest = () => (
  <div>
    <div>Bad Request <Link to="/" activeClassName="is-active">Go Home</Link></div>
  </div>
);

export default BadRequest;