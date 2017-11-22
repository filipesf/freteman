import React from 'react';
import logo from './logo.png';
import './Sidebar.scss';

function Sidebar(props) {
  return (
    <aside className="app-sidebar">
      <a href="#Home" className="app-sidebar__link">
        <img src={logo} className="app-sidebar__logo" alt="Freteman Logo"></img>
       </a>
      <nav className="app-nav">
        <ul className="app-nav__list">
          <li className="app-nav__item"><a href="#Solicitar" className="app-nav__link">Solicitar</a></li>
          <li className="app-nav__item"><a href="#Rastrear" className="app-nav__link">Rastrear</a></li>
          <li className="app-nav__item"><a href="#Ordens" className="app-nav__link">Ordens</a></li>
          <li className="app-nav__item"><a href="#Senha" className="app-nav__link">Senha</a></li>
          <li className="app-nav__item"><a href="#Sair" className="app-nav__link">Sair</a></li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
