import React from 'react';
import bg from './header-bg.svg';
import './Header.scss';

import SiteNav from '../Nav/SiteNav';
import Headline from '../Headline/Headline';

const Header = props => {
  return (
    <header className="site-header" style={{backgroundImage: 'url('+ bg +')'}}>
      <div className="l-wrapper">
        <SiteNav />
        <Headline
          type="header"
          title="Entregamos qualquer coisa em qualquer lugar"
          subtitle="Atendemos entregas de mercadorias, cargas, móveis e mudanças."
        />
      </div>
    </header>
  );
}

export default Header;
