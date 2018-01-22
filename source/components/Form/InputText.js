import React from 'react';
import propTypes from 'prop-types';
import Field from './Field';
import Label from './Label';
import './assets/text.scss';

const InputText = props => {
  return (
    <Field>
      {props.label && <Label for={props.id} text={props.label} />}
      <input className="f-text" id={props.id} name={props.name ? props.name : props.id} type="text" placeholder={props.placeholder} />
    </Field>
  );
};

InputText.propTypes = {
  id: propTypes.string.isRequired,
  name: propTypes.string,
  label: propTypes.string,
  placeholder: propTypes.string,
};

export default InputText;
