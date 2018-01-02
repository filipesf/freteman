import React from 'react';
import propTypes from 'prop-types';
import SvgInline from 'react-svg-inline';
import './assets/thumbnail.scss';

const Thumbnail = props => {
  return (
    <figure className="c-thumbnail">{
      typeof props.src === 'string'
        ? <img src={props.src} alt={props.alt} />
        : <SvgInline svg={props.src} />
    }</figure>
  );
};

Thumbnail.propTypes = {
  src: propTypes.oneOfType([
    propTypes.string,
    propTypes.element,
  ]).isRequired,
  alt: propTypes.string
};

export default Thumbnail;
