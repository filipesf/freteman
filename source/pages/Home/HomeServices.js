import React from 'react';
import data from '../../constants/data';
import Section from '../../containers/Section';
import Headline from '../../components/Headline';
import CardsList from '../../containers/CardsList';

const Services = () => (
  <Section>
    <Headline title={data.services.title} subtitle={data.services.subtitle} />
    <CardsList type="services" data={data.services.content} />
  </Section>
);

export default Services;
