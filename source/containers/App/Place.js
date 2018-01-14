import React from 'react';
import assets from '../../constants/assets';
import { getPlaceIcon } from '../../constants/utils';
import Thumbnail from "../../components/Thumbnail";
import InputText from "../../components/Form/InputText";
import RadioGroup from "../../components/Form/RadioGroup";
import './assets/place.scss';

const Place = props => {
  const hasLiftOptions = [
    { id: 'Sim', label: 'Sim', value: 'Sim' },
    { id: 'Não', label: 'Não', value: 'Não' }
  ];

  return (
    <section className="l-place">
      <Thumbnail src={getPlaceIcon(props.point)} />
      <div className="l-place__fields">
        <div className="l-place__address">
          <InputText id={`end-${props.point}`} label={`Endereço de ${props.point}`} placeholder="Digite um endereço" />
          <InputText id={`no-${props.point}`} placeholder="Nº" />
          <InputText id={`apto-${props.point}`} placeholder="Apto 101" />
          <Thumbnail src={assets.icon.star} />
        </div>

        <div className="l-place__details">
          <InputText id="falar-com" label="Falar com:" placeholder="Rodrigo Rodrigues" />
          <InputText id="qual-andar" label="Qual Andar?" placeholder="12º" />
          <RadioGroup flat label="Possui elevador?" name="elevador" options={hasLiftOptions} />
        </div>
      </div>
    </section>
  );
};

export default Place;
