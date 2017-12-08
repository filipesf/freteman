import React, { Component } from 'react';
import PropTypes from 'prop-types';



/* COMPONENTS
   ========================================================================== */
import Card from '../../components/Card';



/* ASSETS
   ========================================================================== */
import './assets/cards-list.scss';



/* ==========================================================================
   CARDS LIST
   ========================================================================== */
class CardsList extends Component {
  constructor() {
    super();
    this.state = {
      cards: []
    };
  }

  componentWillMount() {
    this.setState({
      cards: this.props.data
    });
  }

  render() {
    const results = this.state.cards;
    let card = results.map((card, index) =>
      <Card
        key={index}
        card={card}
      />
    );

    return (
      <ul className="l-cards-list">
        {card}
      </ul>
    );
  }
}



/**
 * PROPTYPES
 */
CardsList.PropTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default CardsList;
