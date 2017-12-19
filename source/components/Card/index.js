import React from 'react';
import propTypes from 'prop-types';
import SvgInline from 'react-svg-inline';

import Headline from '../Headline';

import './assets/card.scss';

const Card = props => (
  <li className="c-card">
    <figure className="image">
      <SvgInline svg={props.card.image} />
    </figure>
    <Headline
      modifier="small"
      title={props.card.title}
      subtitle={props.card.subtitle}
    />
  </li>
);

Card.propTypes = {
  card: propTypes.object,
  image: propTypes.string,
  title: propTypes.string,
  subtitle: propTypes.string,
};

export default Card;
