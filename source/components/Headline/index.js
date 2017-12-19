import React from 'react';
import cx from 'classnames';
import propTypes from 'prop-types';

import './assets/headline.scss';

const Headline = props => {
  const classes = cx(
    'c-headline',
    props.modifier && `-${props.modifier}`
  );

  return (
    <section className={classes}>
      <h2 className="title">{props.title}</h2>
      {props.subtitle &&
        <h3 className="subtitle">{props.subtitle}</h3>
      }
    </section>
  );
};

Headline.propTypes = {
  title: propTypes.string.isRequired,
  subtitle: propTypes.string,
  modifier: propTypes.string
};

export default Headline;
