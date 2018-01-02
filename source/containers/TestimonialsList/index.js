import React from 'react';
import propTypes from 'prop-types';
import Testimonial from '../../components/Testimonial';
import './assets/testimonials-list.scss';

const TestimonialsList = props => {
  const testimonial = props.data.map((t, index) =>
    <Testimonial key={index} content={t} />);

  return <section className="l-testimonials-list">{testimonial}</section>;
};

TestimonialsList.propTypes = {
  data: propTypes.arrayOf(propTypes.object).isRequired,
};

export default TestimonialsList;
