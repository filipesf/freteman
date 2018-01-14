import React from 'react';
import propTypes from 'prop-types';
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

Radio.propTypes = {
  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  icon: propTypes.string,
};

export default Radio;
