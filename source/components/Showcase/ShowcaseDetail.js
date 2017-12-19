import React from 'react';
import propTypes from 'prop-types';
import SvgInline from 'react-svg-inline';
import cx from 'classnames';

import Headline from '../Headline';

const ShowcaseDetail = props => {
  const classes = cx(
    'c-showcase__detail',
    props.currentItem === props.activeItem && 'is-active'
  );

  return (
    <li className={classes} onClick={() => props.handleChange(props.currentItem)}>
      <SvgInline className="c-showcase__icon" svg={props.data.icon} />
      <Headline title={props.data.title} subtitle={props.data.description} />
    </li>
  );
};

ShowcaseDetail.propTypes = {
  data: propTypes.object.isRequired,
  currentItem: propTypes.number,
  activeItem: propTypes.number,
  handleChange: propTypes.func
};

export default ShowcaseDetail;
