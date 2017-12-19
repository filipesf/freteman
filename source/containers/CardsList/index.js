import React from 'react';
import propTypes from 'prop-types';

import Card from '../../components/Card';

import './assets/cards-list.scss';

class CardsList extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: [],
    };
  }

  componentWillMount() {
    this.setState({
      cards: this.props.data,
    });
  }

  render() {
    const cards = this.state.cards;
    const card = cards.map((cardItem, index) => (
      <Card key={index} card={cardItem} />
    ));

    return (
      <ul className="l-cards-list">{card}</ul>
    );
  }
}

CardsList.propTypes = {
  data: propTypes.arrayOf(propTypes.object).isRequired,
};

export default CardsList;
