import React from 'react';
import SvgInline from 'react-svg-inline';

import brandLogo from './assets/logo.svg';
import brandIcon from './assets/icon.svg';
import './assets/logo.scss';

const Logo = () => (
  <a className="site-logo" href="#Logo">
    <SvgInline className="icon" svg={brandIcon} />
    <SvgInline className="logo" svg={brandLogo} />
  </a>
);

export default Logo;
