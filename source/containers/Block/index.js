import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './assets/block.scss';

const Block = ({shadow, radius, ...props}) => {
  const classes = classNames(
    'l-block',
    shadow && `_shadow`
  );

  return (
    <div {...props} className={classes}>
      {props.children}
    </div>
  );
}

Block.PropTypes = {
  children: PropTypes.element.isRequired,
  shadow: PropTypes.bool
}

export default Block;
