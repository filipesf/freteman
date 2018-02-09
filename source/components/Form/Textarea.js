import React from 'react';
import propTypes from 'prop-types';
import Field from './Field';
import Label from './Label';
import './assets/text.scss';

const Textarea = props => {
  return (
    <Field>
      {props.label && <Label for={props.id} text={props.label} />}
      <textarea
        id={props.id}
        className="f-textarea"
        type="textarea"
        name={props.name ? props.name : props.id}
        placeholder={props.placeholder}
      />
    </Field>
  );
};

Textarea.propTypes = {
  id: propTypes.string.isRequired,
  name: propTypes.string,
  label: propTypes.string,
  placeholder: propTypes.string,
};

export default Textarea;
