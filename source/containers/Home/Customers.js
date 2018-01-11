import React from 'react';
import propTypes from 'prop-types';
import Section from '../../components/Section';
import Headline from '../../components/Headline';
import TestimonialsList from '../../components/Testimonial/List';

const Customers = props => {
  const c = props.data;

  return (
    <Section theme="red">
      <Headline title={c.title} />
      <TestimonialsList data={c.content} />
    </Section>
  );
};

Customers.propTypes = {
  data: propTypes.object.isRequired,
};

export default Customers;
