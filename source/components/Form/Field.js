import React from 'react';
import './assets/field.scss';

const Field = props => {
  return (
    <div className="f-field">
      {props.children}
    </div>
  );
};

export default Field;
