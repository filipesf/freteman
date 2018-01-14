import React from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';
import Field from './Field';
import Label from './Label';
import Radio from './Radio';
import { parseInputID } from '../../constants/utils';
import './assets/radio-group.scss';

const RadioGroup = props => {
  const classes = cx(
    'f-radio-group',
    props.flat && '--flat'
  );

  const radioButtons = props.options.map((r, i) =>
    <Radio key={i} id={parseInputID(r.id)} label={r.label} value={r.value} name={props.name} />
  );

  return (
    <Field>
      {props.label && <Label text={props.label} />}
      <section className={classes}>
        {radioButtons}
      </section>
    </Field>
  );
};

RadioGroup.propTypes = {
  name: propTypes.string.isRequired,
  label: propTypes.string,
  options: propTypes.array.isRequired,
  flat: propTypes.bool,
};

export default RadioGroup;
