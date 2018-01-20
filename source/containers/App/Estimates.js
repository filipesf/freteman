import React from 'react';
import EstimatesForm from './EstimatesForm';
import EstimatesSummary from './EstimatesSummary';
import './assets/estimates.scss';

class Estimates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: {
        total: 'R$ 43,50'
      }
    }
  }

  render() {
    return (
      <section className="l-estimates">
        <EstimatesForm order={this.state.order} />
        <EstimatesSummary order={this.state.order} />
      </section>
    );
  }
}

export default Estimates;
