import React from 'react';
import propTypes from 'prop-types';
import Thumbnail from '../../components/Thumbnail';
import './assets/styles/clients-list.scss';

const ClientsList = props => {
  const clients = props.data.map((b, index) =>
    <Thumbnail key={index} src={b.image} alt={b.alt} />);

  return <section className="l-clients-list">{clients}</section>;
};

ClientsList.propTypes = {
  data: propTypes.arrayOf(propTypes.object).isRequired,
};

export default ClientsList;
