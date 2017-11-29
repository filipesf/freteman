import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './assets/headline.scss';

const Headline = ({
  modifier,
  ...props
}) => {
  const classes = classNames(
    'c-headline',
    modifier && `-${modifier}`
  );

  return (
    <section className={classes}>
      <h2 className="title">{props.title}</h2>
      {props.subtitle &&
        <h3 className="subtitle">{props.subtitle}</h3>
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
