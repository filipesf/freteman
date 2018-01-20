import React from 'react';
import './assets/order-total.scss';

const OrderTotal = props => {
  return (
    <li className="c-order-total">
      <span className="c-order-total__name">Valor Total</span>
      <span className="c-order-total__value">{props.value}</span>
    </li>
  );
};

export default OrderTotal;
