import React from 'react';
import './assets/order-item.scss';

const OrderItems = props => {
  const OrderItem = props.data.map((item, index) =>
    <li className="c-order-item" key={index}>
      <span className="c-order-item__name">{item.name}</span>
      <span className="c-order-item__value">{item.value}</span>
    </li>
  );
  return OrderItem;
};

export default OrderItems;
