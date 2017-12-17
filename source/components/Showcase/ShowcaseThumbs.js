import React from 'react';

const ShowcaseThumbs = props =>
  <li className="c-showcase__thumb">
    <img src={props.info.thumb} alt={props.info.title} />
  </li>

export default ShowcaseThumbs;
