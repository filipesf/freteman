import React from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';

import './assets/section.scss';

const SectionContainer = props => {
  const classes = cx(
    'l-section',
    props.theme && `--${props.theme}`
  );

  return (
    <section className={classes} {...props}>
      {props.children}
    </section>
  );
};

SectionContainer.propTypes = {
  children: propTypes.node.isRequired,
  theme: propTypes.string
};

export default SectionContainer;
