import React from 'react';
import bg from './header-bg.svg';
import trucks from './trucks.png';
import './Header.scss';

import Headline from '../Headline/Headline';
import Block from '../Block/Block';

const Header = props => {
  return (
    <header className="site-header" style={{backgroundImage: 'url('+ bg +')'}}>
      <div className="site-header__container">
        <section className="site-header__section">
          <Headline
            title="Entregamos qualquer coisa em qualquer lugar"
            subtitle="Atendemos entregas de mercadorias, cargas, móveis e mudanças."
            modifier="header"
          />
          <figure className="site-header__image">
            <img src={trucks} alt="Trucks" />
          </figure>
        </section>
        <section className="site-header__section">
          <Block shadow={true} radius={true}></Block>
        </section>
      </div>
    </header>
  );
}

export default Header;
