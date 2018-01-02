import React from 'react';
import propTypes from 'prop-types';
import Thumbnail from '../Thumbnail';
import Headline from '../Headline';
import './assets/card.scss';

const Card = props => (
  <li className="c-card">
    {props.content.image && <Thumbnail src={props.content.image} alt={props.content.title} />}
    {props.content.title && <Headline title={props.content.title} subtitle={props.content.subtitle} small />}
  </li>
);

Card.propTypes = {
  content: propTypes.object
};

export default Card;
