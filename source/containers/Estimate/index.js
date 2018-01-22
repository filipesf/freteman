import React from 'react';
import Form from './Form';
import Summary from './Summary';
import './assets/estimate.scss';

class Estimate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: {
        total: 'R$ 43,50'
      }
    };
  }

  render() {
    return (
      <section className="l-estimate">
        <Form order={this.state.order} />
        <Summary order={this.state.order} />
      </section>
    );
  }
}

export default Estimate;
