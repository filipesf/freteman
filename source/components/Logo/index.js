import React from 'react';
import SVG from 'react-svg-inline';
import logo from './assets/logo.svg';
import icon from './assets/icon.svg';
import './assets/logo.scss';

const Logo = props => {
  return (
    <a className="site-logo" href="#Logo">
      <SVG className="icon" svg={icon} />
      <SVG className="logo" svg={logo} />
    </a>
  );
}

export default Logo;
