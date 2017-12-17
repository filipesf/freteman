import React from 'react';
import SVG from 'react-svg-inline';
import Headline from '../Headline';


const ShowcaseDetail = props =>
  <li className="c-showcase__detail" onClick={()=>props.handleChange(props.info)}>
    <SVG className="c-showcase__icon" svg={props.info.icon} />
    <Headline title={props.info.title} subtitle={props.info.description} />
  </li>

export default ShowcaseDetail;
