import React from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';

const ShowcaseNav = props => {
  const classes = cx(
    'c-showcase__item',
    props.currentItem === props.activeItem && 'is-active'
  );

  return (
    <li className={classes} />
  );
};

ShowcaseNav.propTypes = {
  currentItem: propTypes.number,
  activeItem: propTypes.number
};

export default ShowcaseNav;
