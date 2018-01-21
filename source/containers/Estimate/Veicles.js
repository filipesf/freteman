import React from 'react';
import opts from '../../constants/options';
import RadioGroup from '../../components/Form/RadioGroup';
import './assets/veicles.scss'

const Veicles = () => {
  return (
    <section className="l-veicles">
      <RadioGroup name="veicles" options={opts.veicles} />
      <small className="l-veicles__detail">150kg max. P 133 x L 133 x A 133 cm</small>
    </section>
  );
};

export default Veicles;
