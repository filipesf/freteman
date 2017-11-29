import React from 'react';
import logo from './assets/logo.png';
import './assets/sidebar.scss';

function Sidebar(props) {
  return (
    <aside className="app-sidebar">
      <a href="#Home" className="app-sidebar__link">
        <img src={logo} className="app-sidebar__logo" alt="Freteman Logo"></img>
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
}

export default Sidebar;
