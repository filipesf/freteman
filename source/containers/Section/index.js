import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';
import './assets/section.scss';

const SectionContainer = ({theme, ...props}) => {
  const classes = classNames(
    'l-section',
    theme && `-${theme}`
  );

  return (
    <section className={classes}>
      {props.children}
    </section>
  );
};

SectionContainer.propTypes = {
  children: propTypes.node.isRequired,
  theme: propTypes.string
};

export default SectionContainer;
