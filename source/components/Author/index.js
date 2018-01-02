import React from 'react';
import propTypes from 'prop-types';
import Thumbnail from '../Thumbnail';
import Headline from '../Headline';
import './assets/author.scss';

const Author = props => (
  <section className="c-author">
    <Thumbnail src={props.avatar} alt={props.name} />
    <Headline small title={props.name} subtitle={props.location} />
  </section>
);

Author.propTypes = {
  avatar: propTypes.string,
  name: propTypes.string,
  location: propTypes.string,
};

export default Author;
