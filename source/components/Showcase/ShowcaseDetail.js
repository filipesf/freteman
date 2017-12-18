import React from 'react';
import SVG from 'react-svg-inline';
import cx from 'classnames';

import Headline from '../Headline';

const ShowcaseDetail = props => {
  const classes = cx(
    'c-showcase__detail',
    props.currentItem === props.activeItem && 'is-active'
  );

  return (
    <li className={classes} onClick={() => props.handleChange(props.currentItem)}>
      <SVG className="c-showcase__icon" svg={props.data.icon} />
      <Headline title={props.data.title} subtitle={props.data.description} />
    </li>
  );
}

export default ShowcaseDetail;
