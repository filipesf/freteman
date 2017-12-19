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
      <SvgInline className="icon" classSuffix="" svg={arrowUp} />
      <div className="c-field">
        <label className="label" htmlFor="collection-address">Endereço de coleta</label>
        <input className="c-input -text" id="collection-address" type="text" placeholder="Digite um endereço" />
      </div>
    </section>

    <section className="l-fieldset has-icon">
      <SvgInline className="icon" classSuffix="" svg={arrowDown} />
      <div className="c-field">
        <label className="label" htmlFor="delivery-address">Endereço de entrega</label>
        <input className="c-input -text" id="delivery-address" type="text" placeholder="Digite um endereço" />
      </div>
    </section>

    <hr />

    <section className="l-fieldset has-veicles">
      <div className="c-field">
        <input id="Fiorino" type="radio" name="veicle" value="Fiorino" />
        <label className="c-input -radio has-icon" htmlFor="Fiorino">
          <SvgInline className="icon" classSuffix="" svg={iconFiorino} />
          <span className="text">Fiorino</span>
        </label>
      </div>

      <div className="c-field">
        <input id="Van" type="radio" name="veicle" value="Van" />
        <label className="c-input -radio has-icon" htmlFor="Van">
          <SvgInline className="icon" classSuffix="" svg={iconUtil} />
          <span className="text">Van</span>
        </label>
      </div>

      <div className="c-field">
        <input id="Caminhão" type="radio" name="veicle" value="Caminhão" />
        <label className="c-input -radio has-icon" htmlFor="Caminhão">
          <SvgInline className="icon" classSuffix="" svg={iconTruck} />
          <span className="text">Caminhão</span>
        </label>
      </div>
      <small className="detail">150kg max. P 133 x L 133 x A 133 cm</small>
    </section>

    <hr />

    <OrderSummary />

    <button className="c-btn -block -large -accent">Chamar Mensageiro</button>
  </form>
);

export default FormHome;
