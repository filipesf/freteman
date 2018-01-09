import React from 'react';
import propTypes from 'prop-types';
import Thumbnail from '../Thumbnail';
import './assets/social-links.scss';

const SocialLinks = props => {
  const socialLink = props.data.map((l, index) =>(
    <li className="c-sm-links__item" key={index}>
      <a className="c-sm-links__link" href={l.href} target="_blank" rel="noopener">
        <Thumbnail src={l.icon} />
      </a>
    </li>
  ));

  return <ul className="c-sm-links">{socialLink}</ul>;
};

SocialLinks.propTypes = {
  data: propTypes.array.isRequired
};

export default SocialLinks;
