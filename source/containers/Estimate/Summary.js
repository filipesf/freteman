import React from 'react';
import propTypes from 'prop-types';
import data from '../../constants/dataSummary';
import Panel from '../../components/Panel';
import OrderSummary from '../../components/OrderSummary';

const Summary = props => {
  return (
    <section className="l-estimate__summary">
      <Panel>
        <iframe className="l-estimate__map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31760514.163619608!2d-69.72283286361677!3d-13.656797320180157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9c59c7ebcc28cf%3A0x295a1506f2293e63!2sBrazil!5e0!3m2!1sen!2sie!4v1516497742920" />
        <OrderSummary items={data} total={props.order.total} />
      </Panel>
    </section>
  );
};

Summary.propTypes = {
  order: propTypes.object
};

export default Summary;
