import React from 'react';
import bg from './assets/header-bg.svg';
import trucks from './assets/trucks.png';

import arrowCollection from '../../assets/images/arrow-filled.svg';
import arrowDelivery from '../../assets/images/arrow-outline.svg';

import './assets/header.scss';
import './assets/forms.scss';

import Headline from '../Headline';
import Block from '../../containers/Block';

const Header = props => {
  return (
    <header className="site-header" style={{backgroundImage: 'url('+ bg +')'}}>
      <div className="container">
        <section className="section">
          <Headline
            title="Entregamos qualquer coisa em qualquer lugar"
            subtitle="Atendemos entregas de mercadorias, cargas, móveis e mudanças."
            modifier="header"
          />
          <figure className="image">
            <img src={trucks} alt="Trucks" />
          </figure>
        </section>
        <section className="section">
          <Block shadow={true} radius={true}>
            <form>
              <fieldset className="c-fieldset -collection" style={{backgroundImage: 'url('+ arrowCollection +')'}}>
                <label htmlFor="collection-address">Endereço de coleta</label>
                <input id="collection-address" type="text" placeholder="Digite um endereço" />
              </fieldset>

              <fieldset className="c-fieldset -delivery" style={{backgroundImage: 'url('+ arrowDelivery +')'}}>
                <label htmlFor="delivery-address">Endereço de entrega</label>
                <input id="delivery-address" type="text" placeholder="Digite um endereço" />
              </fieldset>

              <fieldset className="c-fieldset">
                <input type="radio" name="veicle" value="Fiorino" />
                <input type="radio" name="veicle" value="Van" />
                <input type="radio" name="veicle" value="Caminhão" />
              </fieldset>

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
          </Block>
        </section>
      </div>
    </header>
  );
}

export default Header;
