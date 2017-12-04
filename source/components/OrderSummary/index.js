import React from 'react';
import './assets/order-summary.scss';

const OrderSummary = props => {
  return (
    <ul className="l-order-summary _collapse-grid">
      <li className="c-order-item">
        <span className="name">Distância</span>
        <span className="value">54km e 200m</span>
      </li>

      <li className="c-order-item">
        <span className="name">Valor Total</span>
        <span className="value -large">R$ 1264,00</span>
      </li>
    </ul>
  )
}

export default OrderSummary;
