import React from 'react';
import { Link } from 'react-router-dom';
import SvgInline from 'react-svg-inline';
import cx from 'classnames';
import assets from '../../constants/assets';
import Brand from '../Brand';
import '../Button';
import './assets/navigation.scss';

class Navigation extends React.Component {
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
          <Brand link="/" />
          <Link to="/orcamento" className="c-btn --accent u-show@small">FAZER ORÇAMENTO</Link>
          <div className={classes} onClick={this.handleMobileNav}>
            <SvgInline svg={assets.icon.menu} />
          </div>
          <ul className="site-nav__list">
            <li className="site-nav__item"><Link to="frota" className="site-nav__link">Frota</Link></li>
            <li className="site-nav__item"><Link to="servicos" className="site-nav__link">Serviços</Link></li>
            <li className="site-nav__item"><Link to="contato" className="site-nav__link">Contato</Link></li>
            <li className="site-nav__item"><Link to="login" className="site-nav__link">Login</Link></li>
            <Link to="/orcamento" className="c-btn --outline --accent u-hide@small">FAZER ORÇAMENTO</Link>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navigation;
