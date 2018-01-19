import React from 'react';
import SvgInline from "react-svg-inline";
import assets from '../../constants/assets';
import OrderSummary from '../../components/OrderSummary';
import './assets/styles/forms.scss';

const Form = () => (
  <form>
    <section className="l-fieldset has-icon">
      <SvgInline className="l-fieldset__icon" svg={assets.icon.arrowFilled} />
      <div className="c-field">
        <label className="c-field__label" htmlFor="collection-address">Endereço de coleta</label>
        <input className="c-input --text" id="collection-address" type="text" placeholder="Digite um endereço" />
      </div>
    </section>

    <section className="l-fieldset has-icon">
      <SvgInline className="l-fieldset__icon" svg={assets.icon.arrowOutline} />
      <div className="c-field">
        <label className="c-field__label" htmlFor="delivery-address">Endereço de entrega</label>
        <input className="c-input --text" id="delivery-address" type="text" placeholder="Digite um endereço" />
      </div>
    </section>

    <section className="l-fieldset has-veicles">
      <div className="c-field">
        <input id="Fiorino" type="radio" name="veicle" value="Fiorino" />
        <label className="c-input --radio has-icon" htmlFor="Fiorino">
          <SvgInline className="c-input__icon" svg={assets.icon.fiorino} />
          <span className="c-input__info">Fiorino</span>
        </label>
      </div>

      <div className="c-field">
        <input id="Van" type="radio" name="veicle" value="Van" />
        <label className="c-input --radio has-icon" htmlFor="Van">
          <SvgInline className="c-input__icon" svg={assets.icon.util} />
          <span className="c-input__info">Van</span>
        </label>
      </div>

      <div className="c-field">
        <input id="Caminhão" type="radio" name="veicle" value="Caminhão" />
        <label className="c-input --radio has-icon" htmlFor="Caminhão">
          <SvgInline className="c-input__icon" svg={assets.icon.truck} />
          <span className="c-input__info">Caminhão</span>
        </label>
      </div>
      <small className="l-fieldset__detail">150kg max. P 133 x L 133 x A 133 cm</small>
    </section>

    <OrderSummary />

    <button className="c-btn --large --accent">CHAMAR MENSAGEIRO</button>
  </form>
);

export default Form;
