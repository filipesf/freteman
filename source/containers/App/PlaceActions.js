import React from 'react';
import Checkbox from '../../components/Form/Checkbox';
import '../../components/Button';
import './assets/place-actions.scss';

const PlaceActions = () => {
  return (
    <section className="l-place-actions">
      <button className="c-btn --outline --primary">Adicionar Volta</button>
      <button className="c-btn --outline --primary">Adicionar Parada</button>
      <Checkbox id="recibo" name="recibo" label="Recibo digital obrigatório" value="1" checked />
    </section>
  );
};

export default PlaceActions;
