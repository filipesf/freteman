import React from 'react';
import propTypes from 'prop-types';
import SvgInline from 'react-svg-inline';
import './assets/thumbnail.scss';

const Thumbnail = props => {
  const isImage = src => !!src.match(
    "(.(jpeg|jpg|gif|png))|(data:image/(jpeg|jpg|gif|png);?(;base64,))"
  );

  return (
    <figure className="c-thumbnail">{
      isImage(props.src)
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
