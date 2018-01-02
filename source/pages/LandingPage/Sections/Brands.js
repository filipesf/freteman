import React from 'react';
import data from '../../../constants/data';
import Section from '../../../containers/Section';
import Headline from '../../../components/Headline';
import BrandsList from '../../../containers/BrandsList';

const Brands = () => (
  <Section theme="tint">
    <Headline title={data.brands.title} subtitle={data.brands.subtitle} />
    <BrandsList data={data.brands.content} />
  </Section>
);

export default Brands;
