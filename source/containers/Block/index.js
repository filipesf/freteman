import React from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';

import './assets/block.scss';

const Block = props => {
  const classes = cx(
    'l-block',
    props.shadow && `u-shadow`
  );

  return (
    <div className={classes}>
      {props.children}
    </div>
  );
};

Block.propTypes = {
  children: propTypes.oneOfType([
    propTypes.array,
    propTypes.element
  ]).isRequired,
  shadow: propTypes.bool
};

export default Block;
