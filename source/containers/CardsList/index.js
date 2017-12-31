import React from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';

import Card from '../../components/Card';

import './assets/cards-list.scss';

class CardsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
    };
  }

  componentWillMount() {
    this.state({
      cards: this.props.data,
    });
  }

  render() {
    const classes = cx(
      'l-cards-list',
      this.props.hasBenefits && `has-benefits`,
      this.props.hasBrands && `has-brands`
    );

    const cards = this.state.cards;
    const card = cards.map((cardItem, index) => (
      <Card key={index} card={cardItem} flat={this.props.hasBenefits || this.props.hasBrands} />
    ));

    return (
      <ul className={classes}>{card}</ul>
    );
  }
}

CardsList.propTypes = {
  data: propTypes.arrayOf(propTypes.object).isRequired,
  hasBenefits: propTypes.bool,
  hasBrands: propTypes.bool
};

export default CardsList;
