import React from 'react';
import './SiteNav.scss';

import Logo from '../Logo/Logo';
import '../Button/Button';

const SiteNav = props => {
  return (
    <nav className="site-nav">
      <div className="site-nav__container">
        <Logo />
        <ul className="site-nav__list">
          <li className="site-nav__item"><a href="#Frota" className="site-nav__link">Frota</a></li>
          <li className="site-nav__item"><a href="#Serviços" className="site-nav__link">Serviços</a></li>
          <li className="site-nav__item"><a href="#Contato" className="site-nav__link">Contato</a></li>
          <li className="site-nav__item"><a href="#Login" className="site-nav__link">Login</a></li>
          <li className="site-nav__item"><a href="#Button" className="btn btn--outline btn--accent">Texto Marcação</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default SiteNav;
