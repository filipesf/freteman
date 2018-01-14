import React from 'react';
import './assets/select.scss';

const Select = props => {
  return (
    <select className="f-select">{props.options}</select>
  );
}

export default Select;
