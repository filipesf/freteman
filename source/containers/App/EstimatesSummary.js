import React from 'react';
import summaryData from '../../constants/summaryData';
import Panel from '../../components/Panel';
import OrderSummary from '../../components/OrderSummary';

const EstimateSummary = props => {
  return (
    <section className="l-estimates__summary">
      <Panel>
        <OrderSummary items={summaryData} total={props.order.total} />
      </Panel>
    </section>
  );
};

export default EstimateSummary;
