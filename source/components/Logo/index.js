import React from 'react';
import SvgInline from 'react-svg-inline';
import logo from './assets/logo.svg';
import icon from './assets/icon.svg';
import './assets/logo.scss';

const Logo = () => (
  <a className="site-logo" href="#Logo">
    <SvgInline className="icon" svg={icon} />
    <SvgInline className="logo" svg={logo} />
  </a>
);

export default Logo;
