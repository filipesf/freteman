import React from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';
import SvgInline from 'react-svg-inline';
import assets from '../../constants/assets';
import './assets/tooltip.scss';

const Tooltip = props => {
  const classes = cx(
    'c-tooltip',
    props.tip.length >= 50 && '--long'
  );

  return (
    <div className={classes}>
      <span className="c-tooltip__tip" data-tooltip={props.tip} />
      <SvgInline svg={assets.icon.tooltip} />
    </div>
  );
};

Tooltip.propTypes = {
  tip: propTypes.string
};

export default Tooltip;
