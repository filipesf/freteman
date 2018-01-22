import React from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';
import Headline from '../Headline';
import Tooltip from '../Tooltip';
import './assets/panel.scss';

const Panel = props => {
  const classes = cx(
    'l-panel',
    props.theme && `--${props.theme}`,
    props.shadow && `u-shadow`
  );

  return (
    <div className={classes}>
      {props.tooltip && <Tooltip tip={props.tooltip} />}
      {props.title && <Headline medium left title={props.title} />}
      {props.children}
    </div>
  );
};

Panel.propTypes = {
  title: propTypes.string,
  children: propTypes.oneOfType([
    propTypes.array,
    propTypes.element
  ]).isRequired,
  theme: propTypes.string,
  shadow: propTypes.bool,
};

export default Panel;
