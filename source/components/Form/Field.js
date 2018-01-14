import React from 'react';
import propTypes from 'prop-types';
import './assets/field.scss';

const Field = props => {
  return (
    <div className="f-field">
      {props.children}
    </div>
  );
};

Field.propTypes = {
  children: propTypes.node.isRequired,
};

export default Field;
