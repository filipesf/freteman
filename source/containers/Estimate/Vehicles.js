import React from 'react';
import opts from '../../constants/options';
import RadioGroup from '../../components/Form/RadioGroup';
import './assets/vehicles.scss';

const Vehicles = () => {
  return (
    <section className="l-vehicles">
      <RadioGroup name="vehicles" options={opts.vehicles} />
      <small className="l-vehicles__detail">150kg max. P 133 x L 133 x A 133 cm</small>
    </section>
  );
};

export default Vehicles;
