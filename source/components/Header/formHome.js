import React from 'react';
import SVG from "react-svg-inline"
import './assets/forms.scss';

import arrowCollection from '../../assets/images/icons/arrow-filled.svg';
import arrowDelivery from '../../assets/images/icons/arrow-outline.svg';
import carFiorino from '../../assets/images/icons/car-fiorino.svg';
import carTruck from '../../assets/images/icons/car-truck.svg';
import carUtil from '../../assets/images/icons/car-util.svg';

import OrderSummary from '../OrderSummary';

const FormHome = props => {
  return (
    <form>
      <section className="c-fieldset has-icon">
        <SVG className="icon" classSuffix="" svg={arrowCollection} />
        <div className="c-field">
          <label className="label" htmlFor="collection-address">Endereço de coleta</label>
          <input className="c-input -text _nospacing _noborder _noshadow" id="collection-address" type="text" placeholder="Digite um endereço" />
        </div>
      </section>

      <section className="c-fieldset has-icon">
        <SVG className="icon" classSuffix="" svg={arrowDelivery} />
        <div className="c-field">
          <label className="label" htmlFor="delivery-address">Endereço de entrega</label>
          <input className="c-input -text _nospacing _noborder _noshadow" id="delivery-address" type="text" placeholder="Digite um endereço" />
        </div>
      </section>

      <hr />

      <section className="c-fieldset has-veicles">
        <div className="c-field">
          <input id="Fiorino" type="radio" name="veicle" value="Fiorino" />
          <label className="c-input -radio has-icon" htmlFor="Fiorino">
            <SVG className="icon" classSuffix="" svg={carFiorino} />
            <span className="text">Fiorino</span>
          </label>
        </div>

        <div className="c-field">
          <input id="Van" type="radio" name="veicle" value="Van" />
          <label className="c-input -radio has-icon" htmlFor="Van">
            <SVG className="icon" classSuffix="" svg={carUtil} />
            <span className="text">Van</span>
          </label>
        </div>

        <div className="c-field">
          <input id="Caminhão" type="radio" name="veicle" value="Caminhão" />
          <label className="c-input -radio has-icon" htmlFor="Caminhão">
            <SVG className="icon" classSuffix="" svg={carTruck} />
            <span className="text">Caminhão</span>
          </label>
        </div>
        <small className="detail">150kg max. P 133 x L 133 x A 133 cm</small>
      </section>

      <hr />

      <OrderSummary />

      <button className="c-btn -block -large -accent">Chamar Mensageiro</button>
    </form>
  )
}

export default FormHome;
