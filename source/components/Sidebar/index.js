import React from 'react';

import brandLogo from './assets/logo.png';
import './assets/sidebar.scss';

const Sidebar = props => (
  <aside className="app-sidebar">
    <a href="#Home" className="app-sidebar__link">
      <img src={brandLogo} className="app-sidebar__logo" alt="Freteman Logo"></img>
     </a>
    <nav className="app-nav">
      <ul className="list">
        <li className="item"><a href="#Solicitar" className="link">Solicitar</a></li>
        <li className="item"><a href="#Rastrear" className="link">Rastrear</a></li>
        <li className="item"><a href="#Ordens" className="link">Ordens</a></li>
        <li className="item"><a href="#Senha" className="link">Senha</a></li>
        <li className="item"><a href="#Sair" className="link">Sair</a></li>
      </ul>
    </nav>
  </aside>
);

export default Sidebar;
