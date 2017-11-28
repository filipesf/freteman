import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './Headline.scss';

import HeadlineTitle from './HeadlineTitle';
import HeadlineSubTitle from './HeadlineSubTitle';

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
      <HeadlineTitle text={props.title} />
      {props.subtitle &&
        <HeadlineSubTitle text={props.subtitle} />
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
