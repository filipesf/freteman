import React from 'react';
import { Link } from 'react-router-dom';
import assets from '../../constants/assets';
import Brand from '../../components/Brand';
import Thumbnail from '../../components/Thumbnail';
import './assets/sidebar.scss';

const Sidebar = () => (
  <aside className="c-sidebar">
    <Brand link="/" />

    <nav className="c-sidebar__nav">
      <Link to="/orcamento" className="c-sidebar__link">
        <Thumbnail src={assets.icon.orders} />
        <span className="c-sidebar__text">Solicitar</span>
      </Link>
      <Link to="/rastrear" className="c-sidebar__link">
        <Thumbnail src={assets.icon.pin} />
        <span className="c-sidebar__text">Rastrear</span>
      </Link>
      <Link to="/ordens" className="c-sidebar__link">
        <Thumbnail src={assets.icon.orders} />
        <span className="c-sidebar__text">Ordens</span>
      </Link>
      <Link to="/senha" className="c-sidebar__link">
        <Thumbnail src={assets.icon.padlock} />
        <span className="c-sidebar__text">Senha</span>
      </Link>
      <Link to="/sair" className="c-sidebar__link">
        <Thumbnail src={assets.icon.logout} />
        <span className="c-sidebar__text">Sair</span>
      </Link>
    </nav>
  </aside>
);

export default Sidebar;
