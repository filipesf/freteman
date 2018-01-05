import React from 'react';
import propTypes from 'prop-types';
import './assets/social-links.scss';

const SocialLinks = props => {
  const socialLink = props.data.map((l, index) =>
    <li className="c-sm-links__item" key={index}><a href={l.href} /></li>);

  return <ul className="c-sm-links">{socialLink}</ul>;
};

SocialLinks.propTypes = {
  data: propTypes.array.isRequired
};

export default SocialLinks;
