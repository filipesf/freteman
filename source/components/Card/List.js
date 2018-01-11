import React from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';
import Card from '../../components/Card';
import './assets/cards-list.scss';

const CardsList = props => {
  const classes = cx(
    `l-cards-list`,
    props.type && `has-${props.type}`
  );

  const card = props.data.map((c, index) =>
    <Card key={index} content={c} />);

  return <ul className={classes}>{card}</ul>;
};

CardsList.propTypes = {
  data: propTypes.arrayOf(propTypes.object).isRequired,
  type: propTypes.string,
};

export default CardsList;
