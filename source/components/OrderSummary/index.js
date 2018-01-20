import React from 'react';
import OrderItems from './OrderItems';
import OrderTotal from './OrderTotal';
import './assets/order-summary.scss';

const OrderSummary = props => {
  return (
    <ul className="l-order-summary">
      <OrderItems data={props.data} />
      <OrderTotal value="R$ 43,50" />
    </ul>
  );
};

export default OrderSummary;
