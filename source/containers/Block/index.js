import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';
import './assets/block.scss';

const Block = ({shadow, ...props}) => {
  const classes = classNames(
    'l-block',
    shadow && `_shadow`
  );

  return (
    <div {...props} className={classes}>
      {props.children}
    </div>
  );
};

Block.propTypes = {
  children: propTypes.element.isRequired,
  shadow: propTypes.bool
};

export default Block;
