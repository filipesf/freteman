import React from 'react';
import propTypes from 'prop-types';
import SubNavItem from './SubNavItem.js';

const SubNavList = props => {
  const subNavItems = props.data.map((item, index) =>
    <SubNavItem key={index} text={item.text} href={item.href} />);

  return (
    <ul className="c-sub-nav__list">{subNavItems}</ul>
  );
};

SubNavList.propTypes = {
  data: propTypes.array.isRequired
};

export default SubNavList;
