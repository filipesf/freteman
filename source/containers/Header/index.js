import React from 'react';
import data from '../../constants/data';
import Block from '../Block';
import Headline from '../../components/Headline';
import Thumbnail from '../../components/Thumbnail';
import FormHome from './formHome';
import './assets/header.scss';

const Header = () => (
  <header className="site-header" style={{ backgroundImage: 'url(' + data.header.hero + ')' }}>
    <div className="site-header__container">
      <section className="site-header__section">
        <Headline title={data.header.title} subtitle={data.header.subtitle} />
        <Thumbnail src={data.header.featured} alt={data.header.title} />
      </section>
      <section className="site-header__section u-hide@small">
        <Block shadow>
          <FormHome />
        </Block>
      </section>
    </div>
  </header>
);

export default Header;
