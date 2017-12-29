import React from 'react';
import SvgInline from 'react-svg-inline';
import assets from '../../constants/assets';
import './assets/brand.scss';

const Brand = () => (
  <a className="site-brand" href="#Logo">
    <SvgInline className="site-brand__icon" svg={assets.brand.icon} />
    <SvgInline className="site-brand__logo" svg={assets.brand.logo} />
  </a>
);

export default Brand;
