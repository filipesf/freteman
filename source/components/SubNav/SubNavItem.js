import React from 'react';
import propTypes from 'prop-types';

const SubNavItem = props => {
  return (
    <li className="c-subnav__item">
      <a href={props.href} className="c-subnav__link">{props.text}</a>
    </li>
  );
};

SubNavItem.propTypes = {
  text: propTypes.string.isRequired,
  href: propTypes.string.isRequired,
};

export default SubNavItem;
