import React from 'react';
import SvgInline from 'react-svg-inline';

import brandLogo from './assets/logo.svg';
import brandIcon from './assets/icon.svg';
import './assets/brand.scss';

const Logo = () => (
  <a className="site-brand" href="#Logo">
    <SvgInline className="site-brand__icon" svg={brandIcon} />
    <SvgInline className="site-brand__logo" svg={brandLogo} />
  </a>
);

export default Logo;
