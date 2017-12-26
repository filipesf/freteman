import React from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';

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
    const classes = cx(
      'l-cards-list',
      this.props.hasBenefits && `has-benefits`
    );

    const cards = this.state.cards;
    const card = cards.map((cardItem, index) => (
      <Card key={index} card={cardItem} />
    ));

    return (
      <ul className={classes} {...this.props} >{card}</ul>
    );
  }
}

CardsList.propTypes = {
  data: propTypes.arrayOf(propTypes.object).isRequired,
  hasBenefits: propTypes.bool
};

export default CardsList;
