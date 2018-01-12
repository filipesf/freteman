import React from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';
import './assets/panel.scss';

const Panel = props => {
  const classes = cx(
    'l-panel',
    props.shadow && `u-shadow`
  );

  return (
    <div className={classes}>
      {props.children}
    </div>
  );
};

Panel.propTypes = {
  children: propTypes.oneOfType([
    propTypes.array,
    propTypes.element
  ]).isRequired,
  shadow: propTypes.bool
};

export default Panel;
