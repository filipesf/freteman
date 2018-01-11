import React from 'react';
import propTypes from 'prop-types';
import Thumbnail from '../../components/Thumbnail';
import './assets/clients-list.scss';

const ClientsList = props => {
  const brand = props.data.map((b, index) =>
    <Thumbnail key={index} src={b.image} alt={b.alt} />);

  return <section className="l-clients-list">{brand}</section>;
};

ClientsList.propTypes = {
  data: propTypes.arrayOf(propTypes.object).isRequired,
};

export default ClientsList;
