import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './assets/headline.scss';

const Headline = ({
  modifier,
  ...props
}) => {
  const classes = classNames(
    'headline',
    modifier && `headline--${modifier}`
  );

  return (
    <section className={classes}>
      <h2 className="headline__title">{props.title}</h2>
      {props.subtitle &&
        <h3 className="headline__subtitle">{props.subtitle}</h3>
      }
    </section>
  );
}

Headline.PropTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  modifier: PropTypes.string
}

export default Headline;
