import React from 'react';
import propTypes from 'prop-types';
import Section from '../../components/Section';
import Headline from '../../components/Headline';
import ClientsList from './ClientsList';

const Clients = props => {
  const c = props.data;

  return (
    <Section theme="tint">
      <Headline title={c.title} subtitle={c.subtitle} />
      <ClientsList data={c.content} />
    </Section>
  );
};

Clients.propTypes = {
  data: propTypes.object.isRequired,
};

export default Clients;
