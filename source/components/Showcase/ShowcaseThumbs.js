import React from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';

const ShowcaseThumbs = props => {
  const classes = cx(
    'c-showcase__thumb',
    props.currentItem === props.activeItem && 'is-active'
  );

  return (
    <li className={classes}><img src={props.data.thumb} alt={props.data.title} /></li>
  );
};

ShowcaseThumbs.propTypes = {
  data: propTypes.object.isRequired,
  currentItem: propTypes.number,
  activeItem: propTypes.number,
  handleChange: propTypes.func
};

export default ShowcaseThumbs;
