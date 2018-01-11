import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SvgInline from 'react-svg-inline';
import assets from '../../constants/assets';
import './assets/brand.scss';

const Brand = props => {
  return (
    <Link className="site-brand" to={props.link}>
      <SvgInline className="site-brand__icon" svg={assets.brand.icon} />
      <SvgInline className="site-brand__logo" svg={assets.brand.logo} />
    </Link>
  );
};

Brand.propTypes = {
  link: propTypes.string.isRequired
};

export default Brand;
