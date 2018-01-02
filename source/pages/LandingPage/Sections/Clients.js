import React from 'react';
import data from '../../../constants/data';
import Section from '../../../containers/Section';
import Headline from '../../../components/Headline';
import TestimonialsList from '../../../containers/TestimonialsList';

const Clients = () => (
  <Section theme="red">
    <Headline title={data.clients.title} />
    <TestimonialsList data={data.clients.content} />
  </Section>
);

export default Clients;
