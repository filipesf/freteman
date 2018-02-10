import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SubNavItem = props => {
  return (
    <li className="c-subnav__item">
      <Link to={props.href} className="c-subnav__link">{props.text}</Link>
    </li>
  );
};

SubNavItem.propTypes = {
  text: propTypes.string.isRequired,
  href: propTypes.string.isRequired,
};

export default SubNavItem;
