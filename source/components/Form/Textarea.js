import React from 'react';
import Field from './Field';
import Label from './Label';
import { parseInputID } from '../../constants/utils';
import './assets/text.scss';

const TextArea = props => {
  return (
    <Field>
      {props.label && <Label for={parseInputID(props.id)} text={props.label} />}
      <textarea className="f-textarea" id={parseInputID(props.id)} type="textarea" placeholder={props.placeholder} />
    </Field>
  );
};

export default TextArea;
