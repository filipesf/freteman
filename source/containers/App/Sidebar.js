import React from 'react';
import { Link } from 'react-router-dom';
import assets from '../../constants/assets';
import Brand from '../../components/Brand';
import Thumbnail from '../../components/Thumbnail';
import './assets/sidebar.scss';

const Sidebar = () => (
  <aside className="l-sidebar">
    <Brand link="/" />

    <nav className="l-sidebar__nav">
      <Link to="/orcamento" className="l-sidebar__link">
        <Thumbnail src={assets.icon.cursor} />
        <span className="l-sidebar__text">Solicitar</span>
      </Link>
      <Link to="/rastrear" className="l-sidebar__link">
        <Thumbnail src={assets.icon.pin} />
        <span className="l-sidebar__text">Rastrear</span>
      </Link>
      <Link to="/ordens" className="l-sidebar__link">
        <Thumbnail src={assets.icon.orders} />
        <span className="l-sidebar__text">Ordens</span>
      </Link>
      <Link to="/senha" className="l-sidebar__link">
        <Thumbnail src={assets.icon.padlock} />
        <span className="l-sidebar__text">Senha</span>
      </Link>
      <Link to="/sair" className="l-sidebar__link">
        <Thumbnail src={assets.icon.logout} />
        <span className="l-sidebar__text">Sair</span>
      </Link>
    </nav>
  </aside>
);

export default Sidebar;
