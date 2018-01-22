import React from 'react';
import propTypes from 'prop-types';
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

OrderSummary.propTypes = {
  items: propTypes.array,
  total: propTypes.string,
};

export default OrderSummary;
