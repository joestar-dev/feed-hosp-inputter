import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//HOC is a component that render another component
const Info = (props) => (
  <div>
    <h1>HI</h1>
    <p>hello world {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      { !props.isAdmin && <p>this is the admin</p>}
      <WrappedComponent {...props } />
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      { !props.isAuthentication ? (
        <WrappedComponent {...props} />
      ) : (
        <p>please login</p>
      ) }
    </div>
  );
};

const AuthInfo = requireAuthentication(Info);
const AdminInfo = withAdminWarning(Info);

ReactDOM.render(<AuthInfo isAuthentication={false} isAdmin={false} info="test"/>,document.getElementById('root'));