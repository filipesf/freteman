import React from 'react';
import cx from 'classnames';
import Field from './Field';
import Thumbnail from '../Thumbnail';
import { parseInputID } from '../../constants/utils';
import './assets/radio.scss';

const Radio = props => {
  const classes = cx(
    'f-radio',
    props.icon && `has-icon`
  );

  return (
    <Field>
      <input id={parseInputID(props.id)} type="radio" name={props.name} value={props.value} />
      <label className={classes} htmlFor={parseInputID(props.id)}>
        {props.icon && <Thumbnail src={props.icon} />}
        <span className="f-radio__text">{props.label}</span>
      </label>
    </Field>
  );
};

export default Radio;
