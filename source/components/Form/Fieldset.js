import React from 'react';
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

export default Fieldset;
