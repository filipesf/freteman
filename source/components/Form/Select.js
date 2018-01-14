import React from 'react';
import propTypes from 'prop-types';
import assets from '../../constants/assets';
import Thumbnail from '../Thumbnail';
import Field from './Field';
import Label from './Label';
import './assets/select.scss';

const Select = props => {
  const selectOptions = props.options.map((s, i) => (
    <option
      key={i}
      value={s.value}
    >{s.label}</option>
  ));

  return (
    <Field>
      <Label text={props.label} />
      <div className="f-select">
        <Thumbnail src={assets.icon.arrowSimple} />
        <select className="f-select__options" name={props.name}>
          {selectOptions}
        </select>
      </div>
    </Field>
  );
};

Select.propTypes = {
  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  label: propTypes.string,
  options: propTypes.array.isRequired,
};

export default Select;
