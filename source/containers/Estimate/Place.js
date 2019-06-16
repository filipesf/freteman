import React from 'react';
import propTypes from 'prop-types';
import { getPlaceIcon } from '../../constants/utils';
import opts from '../../constants/dataOptions';
import Thumbnail from "../../components/Thumbnail";
import Star from "../../components/Star";
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
          <InputText id={`endereco-${props.point}`} label={`Endereço de ${props.point}`} placeholder="Endereço" />
          <InputText id={`numero-${props.point}`} placeholder="Nº" />
          <InputText id={`complemento-${props.point}`} placeholder="Complemento" />
          <Star id={`salvar-${props.point}`} value="Meu endereço" />
        </div>

        <div className="l-place__details">
          <InputText id={`contato-${props.point}`} label="Falar com:" placeholder="John Doe" />
          <Select id={`andares-${props.point}`} label="Qual Andar?" options={opts.floors} />
          <RadioGroup name={`elevador-${props.point}`} label="Possui elevador?" options={opts.yN} flat />
        </div>
      </div>
    </section>
  );
};

Place.propTypes = {
  point: propTypes.string,
};

export default Place;
