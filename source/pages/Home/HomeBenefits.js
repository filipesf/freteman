import React from 'react';
import data from '../../constants/data';
import Section from '../../containers/Section';
import Headline from '../../components/Headline';
import CardsList from '../../containers/CardsList';

const Benefits = () => (
  <Section>
    <Headline title={data.benefits.title} subtitle={data.benefits.subtitle} />
    <CardsList type="benefits" data={data.benefits.content} />
  </Section>
);

export default Benefits;
