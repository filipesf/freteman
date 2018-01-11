import React from 'react';
import data from '../../constants/data';
import Section from '../../containers/Section';
import Headline from '../../components/Headline';
import TestimonialsList from '../../containers/TestimonialsList';

const Customers = () => (
  <Section theme="red">
    <Headline title={data.customers.title} />
    <TestimonialsList data={data.customers.content} />
  </Section>
);

export default Customers;
