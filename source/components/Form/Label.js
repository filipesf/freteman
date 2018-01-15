import React from 'react';
import propTypes from 'prop-types';
import './assets/label.scss';

const Label = props => {
  return (
    <label className="f-label" htmlFor={props.for}>{props.text}</label>
  );
};

Label.propTypes = {
  for: propTypes.string,
  text: propTypes.string,
};

export default Label;
