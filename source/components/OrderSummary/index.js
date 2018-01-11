import React from 'react';
import './assets/order-summary.scss';

const OrderSummary = () => (
  <ul className="l-order-summary">
    <li className="c-order-item">
      <span className="c-order-item__name">Distância</span>
      <span className="c-order-item__value">54km e 200m</span>
    </li>

    <li className="c-order-item">
      <span className="c-order-item__name">Valor Total</span>
      <span className="c-order-item__value --large">R$ 1264,00</span>
    </li>
  </ul>
);

export default OrderSummary;
