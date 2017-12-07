import React, {Component} from 'react';
import SVG from 'react-svg-inline';
import icon from './assets/menu.svg';
import './assets/sitenav.scss';

import Logo from '../Logo';
import '../Button';

class SiteNav extends Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
    this.handleClass = this.handleClass.bind(this);
  }

  handleClass() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }

  render() {
    let activeState = this.state.active ? ' is-active' : '';

    return (
      <nav className="site-nav">
        <div className="container">
          <Logo />
          <a href="#Button" className="c-btn -accent _show-mobile-only">Fazer Orçamento</a>
          <div className={'i-nav' + activeState} onClick={this.handleClass}>
            <SVG svg={icon} />
          </div>
          <ul className="list">
            <li className="item"><a href="#Frota" className="link">Frota</a></li>
            <li className="item"><a href="#Serviços" className="link">Serviços</a></li>
            <li className="item"><a href="#Contato" className="link">Contato</a></li>
            <li className="item"><a href="#Login" className="link">Login</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default SiteNav;
