import React from 'react';
import './assets/label.scss';

const Label = props => {
  return (
    <label className="f-label" htmlFor={props.for}>{props.text}</label>
  );
};

export default Label;
