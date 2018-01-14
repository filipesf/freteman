import React from 'react';
import assets from '../../constants/assets';
import Fieldset from '../../components/Form/Fieldset';
import Radio from '../../components/Form/Radio';

const Veicles = () => {
  return (
    <Fieldset has="veicles">
      <Radio id="Fiorino" label="Fiorino" value="Fiorino" name="veicle" icon={assets.icon.fiorino} />
      <Radio id="Van" label="Van" value="Van" name="veicle" icon={assets.icon.util} />
      <Radio id="Caminhão" label="Caminhão" value="Caminhão" name="veicle" icon={assets.icon.truck} />
      <small className="f-fieldset__detail">150kg max. P 133 x L 133 x A 133 cm</small>
    </Fieldset>
  );
};

export default Veicles;
