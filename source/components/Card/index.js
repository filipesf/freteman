import React from 'react';
import propTypes from 'prop-types';
import SvgInline from 'react-svg-inline';
import isSvg from 'is-svg';
import cx from 'classnames';

import Headline from '../Headline';

import './assets/card.scss';

const Card = props => {
  const classes = cx(
    'c-card',
    props.flat && `--flat`
  );

  return (
    <li className={classes}>
      <figure className="c-card__image">{
        isSvg(props.card.image)
          ? <SvgInline svg={props.card.image} />
          : <img src={props.card.image} />
      }</figure>
      {props.card.title && <Headline title={props.card.title} subtitle={props.card.subtitle} small />}
    </li>
  );
};

Card.propTypes = {
  card: propTypes.object,
  image: propTypes.string,
  title: propTypes.string,
  subtitle: propTypes.string,
  flat: propTypes.bool,
};

export default Card;
