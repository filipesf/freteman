import React from 'react';
import data from '../../constants/data';
import Section from '../../containers/Section';
import Headline from '../../components/Headline';
import ClientsList from '../../containers/ClientsList';

const Clients = () => (
  <Section theme="tint">
    <Headline title={data.clients.title} subtitle={data.clients.subtitle} />
    <ClientsList data={data.clients.content} />
  </Section>
);

export default Clients;
