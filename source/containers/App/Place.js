import React from 'react';
import propTypes from 'prop-types';
import assets from '../../constants/assets';
import { getPlaceIcon } from '../../constants/utils';
import opts from '../../constants/options';
import Thumbnail from "../../components/Thumbnail";
import Select from "../../components/Form/Select";
import InputText from "../../components/Form/InputText";
import RadioGroup from "../../components/Form/RadioGroup";
import './assets/place.scss';

const Place = props => {
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
          <Select id="qual-andar" label="Qual Andar?" name="andares" options={opts.floors} />
          <RadioGroup flat label="Possui elevador?" name="elevador" options={opts.yN} />
        </div>
      </div>
    </section>
  );
};

Place.propTypes = {
  point: propTypes.string,
};

export default Place;
