import React from 'react';
import SVG from "react-svg-inline"
import './assets/forms.scss';

import arrowCollection from '../../assets/images/icons/arrow-filled.svg';
import arrowDelivery from '../../assets/images/icons/arrow-outline.svg';
import carFiorino from '../../assets/images/icons/car-fiorino.svg';
import carTruck from '../../assets/images/icons/car-truck.svg';
import carUtil from '../../assets/images/icons/car-util.svg';

const FormHome = props => {
  return (
    <form>
      <div className="c-fieldset has-icon">
        <SVG className="icon" classSuffix="" svg={arrowCollection} />
        <div className="field">
          <label className="label" htmlFor="collection-address">Endereço de coleta</label>
          <input className="input" id="collection-address" type="text" placeholder="Digite um endereço" />
        </div>
      </div>

      <div className="c-fieldset has-icon">
        <SVG className="icon" classSuffix="" svg={arrowDelivery} />
        <div className="field">
          <label className="label" htmlFor="delivery-address">Endereço de entrega</label>
          <input className="input" id="delivery-address" type="text" placeholder="Digite um endereço" />
        </div>
      </div>

      <hr />

      <div className="c-fieldset has-veicles">
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
      </div>

      <hr />

      <section>
        <div>
          <h5>Distância</h5>
          <p>54km e 200m</p>
        </div>

        <div>
          <h5>Valor</h5>
          <p>R$ 1264,00</p>
        </div>
      </section>

      <button className="c-btn -block -large -accent">Chamar Mensageiro</button>
    </form>
  )
}

export default FormHome;
