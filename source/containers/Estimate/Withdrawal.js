import React from 'react';
import opts from '../../constants/dataOptions';
import Fieldset from '../../components/Form/Fieldset';
import Checkbox from '../../components/Form/CheckboxButton';
import Select from '../../components/Form/Select';
import '../../components/Button';

const Withdrawal = () => {
  return (
    <Fieldset>
      <Checkbox id="em-1-hora" name="em-1-hora" label="Dentro de 1h" value="1" />
      <span className="f-fieldset__text">Ou agendar</span>
      <Select id="withdrawal-date" name="withdrawal-date" options={opts.withdrawalDate} />
      <Select id="withdrawal-time" name="withdrawal-time" options={opts.withdrawalTime} />
    </Fieldset>
  );
};

export default Withdrawal;
