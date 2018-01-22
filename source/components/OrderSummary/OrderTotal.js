import React from 'react';
import propTypes from 'prop-types';
import './assets/order-total.scss';

const OrderTotal = props => {
  return (
    <li className="c-order-total">
      <span className="c-order-total__name">Valor Total</span>
      <span className="c-order-total__value">{props.value}</span>
    </li>
  );
};

OrderTotal.propTypes = {
  value: propTypes.string,
};

export default OrderTotal;
