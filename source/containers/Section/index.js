import React from 'react';
import PropTypes from 'prop-types';
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
}

SectionContainer.PropTypes = {
  children: PropTypes.element.isRequired,
  theme: PropTypes.string
}

export default SectionContainer;
