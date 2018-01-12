import React from 'react';
import Panel from '../../components/Panel';
import './assets/estimates.scss';

class Estimates extends React.Component {
  render() {
    return (
      <section className="l-estimates">
        <Panel />
        <Panel />
      </section>
    );
  }
}

export default Estimates;
