import React from 'react';

const ShowcaseNav = props =>
  <li className="c-showcase__item" onClick={()=>props.handleChange(props.x)}></li>

export default ShowcaseNav;
