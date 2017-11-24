import React from 'react';
import bg from './header-bg.svg';
import './Header.scss';

import SiteNav from '../Nav/SiteNav';

const Header = props => {
  return (
    <header className="site-header" style={{backgroundImage: 'url('+ bg +')'}}>
      <div className="l-wrapper">
        <SiteNav />
      </div>
    </header>
  );
}

export default Header;
