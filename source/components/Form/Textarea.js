import React from 'react';
import propTypes from 'prop-types';
import Field from './Field';
import Label from './Label';
import { parseInputID } from '../../constants/utils';
import './assets/text.scss';

const Textarea = props => {
  return (
    <Field>
      {props.label && <Label for={parseInputID(props.id)} text={props.label} />}
      <textarea className="f-textarea" id={parseInputID(props.id)} type="textarea" placeholder={props.placeholder} />
    </Field>
  );
};

Textarea.propTypes = {
  id: propTypes.string.isRequired,
  label: propTypes.string,
  placeholder: propTypes.string,
};

export default Textarea;
