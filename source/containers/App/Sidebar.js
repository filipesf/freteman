import React from 'react';
import { Link } from 'react-router-dom';
import sidebarNav from '../../constants/sidebarNav';
import Brand from '../../components/Brand';
import Thumbnail from '../../components/Thumbnail';
import './assets/sidebar.scss';

const Sidebar = () => {
  const navLinks = sidebarNav.map((item, index) => (
    <Link to={item.href} className="l-sidebar__link" key={index}>
      <Thumbnail src={item.icon} />
      <span className="l-sidebar__text">{item.text}</span>
    </Link>
  ));

  return (
    <aside className="l-sidebar">
      <Brand link="/" />
      <nav className="l-sidebar__nav">{navLinks}</nav>
    </aside>
  );
};

export default Sidebar;
