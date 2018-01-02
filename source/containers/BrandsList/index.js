import React from 'react';
import propTypes from 'prop-types';
import Thumbnail from '../../components/Thumbnail';
import './assets/brands-list.scss';

const BrandsList = props => {
  const brand = props.data.map((b, index) =>
    <Thumbnail key={index} src={b.image} alt={b.alt} />);

  return <section className="l-brands-list">{brand}</section>;
};

BrandsList.propTypes = {
  data: propTypes.arrayOf(propTypes.object).isRequired,
};

export default BrandsList;
