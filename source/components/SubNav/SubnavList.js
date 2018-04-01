import React from 'react';
import propTypes from 'prop-types';
import SubnavItem from './SubnavItem';

const SubNavList = props => {
  const subnavItems = props.data.map((item, index) =>
    <SubnavItem key={index} text={item.text} href={item.href} />);

  return (
    <ul className="c-subnav__list">{subnavItems}</ul>
  );
};

SubNavList.propTypes = {
  data: propTypes.array.isRequired
};

export default SubNavList;
