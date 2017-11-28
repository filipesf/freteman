import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './SectionContainer.scss';

const SectionContainer = ({theme, ...props}) => {
  const classes = classNames(
    'section',
    theme && `section--${theme}`
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
