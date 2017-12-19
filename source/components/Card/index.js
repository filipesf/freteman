import React from 'react';
import propTypes from 'prop-types';
import SvgInline from 'react-svg-inline';

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
        <SvgInline svg={c.image} />
      </figure>
      <Headline
        modifier="small"
        title={c.title}
        subtitle={c.subtitle}
      />
    </li>
  );
};



/**
 * PROPTYPES
 */
Card.propTypes = {
  card: propTypes.object,
  image: propTypes.string,
  title: propTypes.string.isRequired,
  subtitle: propTypes.string.isRequired
};

export default Card;
