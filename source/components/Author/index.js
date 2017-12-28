import React from 'react';
import propTypes from 'prop-types';

import Headline from '../Headline';

import './assets/author.scss';

const Author = props => (
  <section className="c-author">
    <figure className="c-author__avatar"><img src={props.avatar} /></figure>
    <Headline small title={props.name} subtitle={props.location} />
  </section>
);

Author.propTypes = {
  avatar: propTypes.string,
  name: propTypes.string,
  location: propTypes.string,
};

export default Author;
