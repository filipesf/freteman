import React from 'react';
import cx from 'classnames';
import SvgInline from 'react-svg-inline';
import { Link } from 'react-router-dom';
import assets from '../../constants/assets';
import Brand from '../../components/Brand';
import '../../components/Button';
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
          <Link to="/orcamento" className="c-btn --accent u-show@small">Fazer Orçamento</Link>
          <div className={classes} onClick={this.handleMobileNav}>
            <SvgInline svg={assets.icon.menu} />
          </div>
          <ul className="site-nav__list">
            <li className="site-nav__item"><Link to="#Frota" className="site-nav__link">Frota</Link></li>
            <li className="site-nav__item"><Link to="#Serviços" className="site-nav__link">Serviços</Link></li>
            <li className="site-nav__item"><Link to="#Contato" className="site-nav__link">Contato</Link></li>
            <li className="site-nav__item"><Link to="#Login" className="site-nav__link">Login</Link></li>
            <Link to="/orcamento" className="c-btn --outline --accent u-hide@small">Fazer Orçamento</Link>
          </ul>
        </div>
      </nav>
    );
  }
}

export default SiteNav;
