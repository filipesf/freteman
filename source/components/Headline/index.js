import React from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';
import './assets/headline.scss';

const Headline = props => {
  const classes = cx(
    'c-headline',
    props.small && '--small'
  );

  const Title = props.small ? `h4` : `h2`;
  const Subtitle = props.small ? `h5` : `h3`;

  return (
    <hgroup className={classes}>
      <Title className="c-headline__title">{props.title}</Title>
      {props.subtitle && <Subtitle className="c-headline__subtitle">{props.subtitle}</Subtitle> }
    </hgroup>
  );
};

Headline.propTypes = {
  title: propTypes.string.isRequired,
  subtitle: propTypes.string,
  header: propTypes.bool,
  small: propTypes.bool,
};

export default Headline;
