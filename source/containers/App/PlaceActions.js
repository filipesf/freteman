import React from 'react';
import Fieldset from '../../components/Form/Fieldset';
import Checkbox from '../../components/Form/Checkbox';
import '../../components/Button';

const PlaceActions = () => {
  return (
    <Fieldset>
      <button className="c-btn --outline --primary">Adicionar Volta</button>
      <button className="c-btn --outline --primary">Adicionar Parada</button>
      <Checkbox id="recibo" name="recibo" label="Recibo digital obrigatório" value="1" checked />
    </Fieldset>
  );
};

export default PlaceActions;
