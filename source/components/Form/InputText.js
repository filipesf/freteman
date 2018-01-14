import React from 'react';
import propTypes from 'prop-types';
import Field from './Field';
import Label from './Label';
import { parseInputID } from '../../constants/utils';
import './assets/text.scss';

const InputText = props => {
  return (
    <Field>
      {props.label && <Label for={parseInputID(props.id)} text={props.label} />}
      <input className="f-text" id={parseInputID(props.id)} type="text" placeholder={props.placeholder} />
    </Field>
  );
};

InputText.propTypes = {
  id: propTypes.string.isRequired,
  label: propTypes.string,
  placeholder: propTypes.string,
};

export default InputText;
