import React from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';
import './assets/fieldset.scss';

const Fieldset = props => {
  const classes = cx(
    'f-fieldset',
    props.has && `has-${props.has}`
  );

  return (
    <section className={classes}>
      {props.children}
    </section>
  );
};

Fieldset.propTypes = {
  has: propTypes.string,
  children: propTypes.node.isRequired,
};

export default Fieldset;
