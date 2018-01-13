import React from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';
import './assets/headline.scss';

const Headline = props => {
  const classes = cx(
    'c-headline',
    props.medium && '--medium',
    props.small && '--small',
    props.left && 'u-text-left',
    props.right && 'u-text-right'
  );

  const Title = props.small || props.medium ? `h4` : `h2`;
  const Subtitle = props.small || props.medium ? `h5` : `h3`;

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
  medium: propTypes.bool,
  small: propTypes.bool,
  left: propTypes.bool,
  right: propTypes.bool,
};

export default Headline;
