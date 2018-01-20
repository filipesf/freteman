import React from 'react';
import OrderItems from './OrderItems';
import OrderTotal from './OrderTotal';
import './assets/order-summary.scss';

const OrderSummary = props => {
  return (
    <ul className="l-order-summary">
      {props.items && <OrderItems data={props.items} />}
      <OrderTotal value={props.total} />
    </ul>
  );
};

export default OrderSummary;
