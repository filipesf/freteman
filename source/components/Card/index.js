import React from 'react';
import PropTypes from 'prop-types';
import SVG from 'react-svg-inline';

/* COMPONENTS
   ========================================================================== */
import Headline from '../Headline';



/* ASSETS
   ========================================================================== */
import './assets/card.scss';



/* ==========================================================================
   CARD
   ========================================================================== */
const Card = props => {
  const c = props.card;

  return (
    <li className="c-card">
      <figure className="image">
        <SVG svg={c.image} />
      </figure>
      <Headline
        modifier="small"
        title={c.title}
        subtitle={c.subtitle}
      />
    </li>
  );
}



/**
 * PROPTYPES
 */
Card.PropTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
}

export default Card;
