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
        <div className="field">
          <label className="label" htmlFor="collection-address">Endereço de coleta</label>
          <input className="input _flat" id="collection-address" type="text" placeholder="Digite um endereço" />
        </div>
      </section>

      <section className="c-fieldset has-icon">
        <SVG className="icon" classSuffix="" svg={arrowDelivery} />
        <div className="field">
          <label className="label" htmlFor="delivery-address">Endereço de entrega</label>
          <input className="input _flat" id="delivery-address" type="text" placeholder="Digite um endereço" />
        </div>
      </section>

      <hr />

      <section className="c-fieldset has-veicles">
        <div className="field -radio">
          <label htmlFor="Fiorino" className="c-btn -radio -icon">
            <SVG className="icon" classSuffix="" svg={carFiorino} />
            <span className="text">Fiorino</span>
          </label>
          <input id="Fiorino" type="radio" name="veicle" value="Fiorino" />
        </div>

        <div className="field -radio">
          <label htmlFor="Van" className="c-btn -radio -icon">
            <SVG className="icon" classSuffix="" svg={carUtil} />
            <span className="text">Van</span>
          </label>
          <input id="Van" type="radio" name="veicle" value="Van" />
        </div>

        <div className="field -radio">
          <label htmlFor="Caminhão" className="c-btn -radio -icon">
            <SVG className="icon" classSuffix="" svg={carTruck} />
            <span className="text">Caminhão</span>
          </label>
          <input id="Caminhão" type="radio" name="veicle" value="Caminhão" />
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
