import React from 'react';
import './assets/sitenav.scss';

import Logo from '../Logo';
import '../Button';

const SiteNav = props => {
  return (
    <nav className="site-nav">
      <div className="container">
        <Logo />
        <ul className="list">
          <li className="item"><a href="#Frota" className="link">Frota</a></li>
          <li className="item"><a href="#Serviços" className="link">Serviços</a></li>
          <li className="item"><a href="#Contato" className="link">Contato</a></li>
          <li className="item"><a href="#Login" className="link">Login</a></li>
          <li className="item"><a href="#Button" className="c-btn -outline -accent">Fazer Orçamento</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default SiteNav;
