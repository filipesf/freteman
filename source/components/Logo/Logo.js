import React from 'react';
import logo from './logo-freteman.png';
import logoMobile from './logo-freteman-mobile.png';
import './Logo.scss';

const Logo = props => {
  return (
    <a className="site-logo" href="#Logo">
      <picture>
        <source media="(max-width: 768px)" srcSet={logoMobile} />
        <img src={logo} alt="Freteman" />
      </picture>
    </a>
  );
}

export default Logo;
