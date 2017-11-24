import React from 'react';
import logo from './logo-freteman.png';
import './Logo.scss';

const Logo = props => {
  return (
    <figure className="site-logo">
      <a href="#Logo">
        <img src={logo} alt="Freteman"/>
      </a>
    </figure>
  );
}

export default Logo;
