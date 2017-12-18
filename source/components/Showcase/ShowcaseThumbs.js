import React from 'react';
import cx from 'classnames';

const ShowcaseThumbs = props => {
  const classes = cx(
    'c-showcase__thumb',
    props.currentItem === props.activeItem && 'is-active'
  );

  return (
    <li className={classes}><img src={props.data.thumb} alt={props.data.title} /></li>
  );
}

export default ShowcaseThumbs;
