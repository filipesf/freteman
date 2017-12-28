import React from 'react';
import SvgInline from "react-svg-inline";

import OrderSummary from '../OrderSummary';

import arrowUp from '../../assets/images/icons/arrow-filled.svg';
import arrowDown from '../../assets/images/icons/arrow-outline.svg';
import iconFiorino from '../../assets/images/icons/car-fiorino.svg';
import iconTruck from '../../assets/images/icons/car-truck.svg';
import iconUtil from '../../assets/images/icons/car-util.svg';
import './assets/forms.scss';

const FormHome = () => (
  <form>
    <section className="l-fieldset has-icon">
      <SvgInline className="l-fieldset__icon" svg={arrowUp} />
      <div className="c-field">
        <label className="c-field__label" htmlFor="collection-address">Endereço de coleta</label>
        <input className="c-input --text" id="collection-address" type="text" placeholder="Digite um endereço" />
      </div>
    </section>

    <section className="l-fieldset has-icon">
      <SvgInline className="l-fieldset__icon" svg={arrowDown} />
      <div className="c-field">
        <label className="c-field__label" htmlFor="delivery-address">Endereço de entrega</label>
        <input className="c-input --text" id="delivery-address" type="text" placeholder="Digite um endereço" />
      </div>
    </section>

    <section className="l-fieldset has-veicles">
      <div className="c-field">
        <input id="Fiorino" type="radio" name="veicle" value="Fiorino" />
        <label className="c-input --radio has-icon" htmlFor="Fiorino">
          <SvgInline className="c-input__icon" svg={iconFiorino} />
          <span className="c-input__info">Fiorino</span>
        </label>
      </div>

      <div className="c-field">
        <input id="Van" type="radio" name="veicle" value="Van" />
        <label className="c-input --radio has-icon" htmlFor="Van">
          <SvgInline className="c-input__icon" svg={iconUtil} />
          <span className="c-input__info">Van</span>
        </label>
      </div>

      <div className="c-field">
        <input id="Caminhão" type="radio" name="veicle" value="Caminhão" />
        <label className="c-input --radio has-icon" htmlFor="Caminhão">
          <SvgInline className="c-input__icon" svg={iconTruck} />
          <span className="c-input__info">Caminhão</span>
        </label>
      </div>
      <small className="l-fieldset__detail">150kg max. P 133 x L 133 x A 133 cm</small>
    </section>

    <OrderSummary />

    <button className="c-btn --large --accent">Chamar Mensageiro</button>
  </form>
);

export default FormHome;
