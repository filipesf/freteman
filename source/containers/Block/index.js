import React from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';

import './assets/block.scss';

const Block = props => {
  const classes = cx(
    'l-block',
    props.shadow && `_shadow`
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
