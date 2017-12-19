import React from 'react';
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

export default ShowcaseNav;
