import React from 'react';
import data from '../../../constants/data';
import Section from '../../../containers/Section';
import Headline from '../../../components/Headline';
import CardsList from '../../../containers/CardsList';

const Brands = () => (
  <Section theme="tint">
    <Headline title={data.brands.title} subtitle={data.brands.subtitle} />
    <CardsList hasBrands data={data.brands.content} />
  </Section>
);

export default Brands;
