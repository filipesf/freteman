import React from 'react';
import cx from 'classnames';
import assets from '../../constants/assets';
import Headline from '../../components/Headline';
import Thumbnail from '../../components/Thumbnail';
import './assets/console.scss';

class Console extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: ''
    };
    this.handleAuth = this.handleAuth.bind(this);
  }

  handleAuth(e) {
    e.preventDefault();
    this.setState({
      auth: !this.state.auth
    });
  }

  render() {
    const classes = cx(
      'c-console',
      this.state.auth ? '' : '--alert'
    );

    return (
      <section className={classes}>
        {!this.state.auth &&
          <div className="c-console__msg">
            <Thumbnail src={assets.icon.alert} />
            <Headline title="Você não está logado" subtitle="Se você já for efetivar uma solicitação é importante que logue-se primeiro." small left />
          </div>
        }

        {this.state.auth ?
          <div className="c-console__user">
            <Headline title="Rodrigo Rodrigues" small right />
            <Thumbnail src="https://i.stack.imgur.com/HQwHI.jpg" />
          </div>
          :
          <div className="c-console__actions">
            <button className="c-btn --primary" onClick={this.handleAuth}>FAZER LOGIN</button>
            <span className="c-btn --outline --primary">CADASTRAR</span>
          </div>
        }
      </section>
    );
  }
}

export default Console;
