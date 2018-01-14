import React from 'react';
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

export default InputText;
