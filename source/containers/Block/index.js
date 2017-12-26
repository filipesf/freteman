import React from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';

import './assets/block.scss';

const Block = ({shadow, ...props}) => {
  const classes = cx(
    'l-block',
    shadow && `u-shadow`
  );

  return (
    <div className={classes} {...props}>
      {props.children}
    </div>
  );
};

Block.propTypes = {
  children: propTypes.element.isRequired,
  shadow: propTypes.bool
};

export default Block;
