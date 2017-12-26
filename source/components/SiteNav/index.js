import React from 'react';
import cx from 'classnames';
import SvgInline from 'react-svg-inline';

import Brand from '../Brand';
import '../Button';

import mobileNavIcon from './assets/menu.svg';
import './assets/sitenav.scss';

class SiteNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobileNavActive: false,
    };
    this.handleMobileNav = this.handleMobileNav.bind(this);
  }

  handleMobileNav() {
    const currentState = this.state.isMobileNavActive;
    this.setState({
      isMobileNavActive: !currentState,
    });
  }

  render() {
    const classes = cx('i-nav', this.state.isMobileNavActive && 'is-active');

    return (
      <nav className="site-nav">
        <div className="site-nav__container">
          <Brand />
          <a href="#Button" className="c-btn -accent _show-mobile-only">Fazer Orçamento</a>
          <div className={classes} onClick={this.handleMobileNav}>
            <SvgInline svg={mobileNavIcon} />
          </div>
          <ul className="site-nav__list">
            <li className="site-nav__item"><a href="#Frota" className="site-nav__link">Frota</a></li>
            <li className="site-nav__item"><a href="#Serviços" className="site-nav__link">Serviços</a></li>
            <li className="site-nav__item"><a href="#Contato" className="site-nav__link">Contato</a></li>
            <li className="site-nav__item"><a href="#Login" className="site-nav__link">Login</a></li>
            <a href="#Button" className="c-btn -outline -accent _hide-mobile-only">Fazer Orçamento</a>
          </ul>
        </div>
      </nav>
    );
  }
}

export default SiteNav;
