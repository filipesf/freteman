import React from 'react';
import propTypes from 'prop-types';
import { parseInputID } from '../../constants/utils';
import assets from '../../constants/assets';
import Field from './Field';
import Thumbnail from '../Thumbnail';
import './assets/checkbox.scss';

const Checkbox = props => {
  return (
    <Field>
      <input id={parseInputID(props.id)} type="checkbox" name={props.name} value={props.value} defaultChecked={props.checked} />
      <label className="f-checkbox" htmlFor={parseInputID(props.id)}>
        <Thumbnail src={assets.icon.check} />
        <span className="f-checkbox__text">{props.label}</span>
      </label>
    </Field>
  );
};

Checkbox.propTypes = {
  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  checked: propTypes.bool,
};

export default Checkbox;
