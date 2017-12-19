import React from 'react';

import Block from '../../containers/Block';

import Headline from '../Headline';
import FormHome from './formHome';

import imageHero     from './assets/bg-header.png';
import imageFeatured from './assets/trucks.png';
import './assets/header.scss';

const Header = () => (
  <header className="site-header" style={{ backgroundImage: 'url(' + imageHero + ')' }}>
    <div className="container">
      <section className="section">
        <Headline
          title="Entregamos qualquer coisa em qualquer lugar"
          subtitle="Atendemos entregas de mercadorias, cargas, móveis e mudanças."
          modifier="header"
        />
        <figure className="image">
          <img src={imageFeatured} alt="Entregamos qualquer coisa em qualquer lugar" />
        </figure>
      </section>
      <section className="section">
        <Block shadow>
          <FormHome />
        </Block>
      </section>
    </div>
  </header>
);

export default Header;
