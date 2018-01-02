import React from 'react';
import propTypes from 'prop-types';
import Author from '../Author';
import './assets/testimonial.scss';

const Testimonial = props => (
  <article className="c-testimonial">
    <blockquote className="c-testimonial__quote">{props.content.testimonial}</blockquote>
    <Author avatar={props.content.avatar} name={props.content.name} location={props.content.location} />
  </article>
);

Testimonial.propTypes = {
  content: propTypes.object.isRequired
};

export default Testimonial;
