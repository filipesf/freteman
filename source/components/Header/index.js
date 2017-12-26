import React from 'react';

import Block from '../../containers/Block';

import Headline from '../Headline';
import FormHome from './formHome';

import imageHero from './assets/bg-header.png';
import imageFeatured from './assets/trucks.png';
import './assets/header.scss';

const Header = () => (
  <header className="site-header" style={{ backgroundImage: 'url(' + imageHero + ')' }}>
    <div className="site-header__container">
      <section className="site-header__section">
        <Headline
          title="Entregamos qualquer coisa em qualquer lugar"
          subtitle="Atendemos entregas de mercadorias, cargas, móveis e mudanças."
          header
        />
        <figure className="site-header__image">
          <img src={imageFeatured} alt="Entregamos qualquer coisa em qualquer lugar" />
        </figure>
      </section>
      <section className="site-header__section">
        <Block shadow>
          <FormHome />
        </Block>
      </section>
    </div>
  </header>
);

export default Header;
