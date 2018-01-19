import React from 'react';
import propTypes from 'prop-types';
import { parseInputID } from '../../constants/utils';
import Field from './Field';
import Thumbnail from '../Thumbnail';
import './assets/checkbox.scss';

const CheckboxButton = props => {
  return (
    <Field>
     <input id={parseInputID(props.id)} type="checkbox" name={props.name} value={props.value} defaultChecked={props.checked} />
      <label className="f-checkbox --button" htmlFor={parseInputID(props.id)}>
        {props.icon && <Thumbnail src={props.icon} />}
        <span className="f-checkbox__text">{props.label}</span>
      </label>
    </Field>
  );
};

CheckboxButton.propTypes = {
  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  checked: propTypes.bool,
  icon: propTypes.string,
};

export default CheckboxButton;
