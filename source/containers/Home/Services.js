import React from 'react';
import propTypes from 'prop-types';
import Section from '../../components/Section';
import Headline from '../../components/Headline';
import CardsList from '../../components/Card/List';

const Services = props => {
  const s = props.data;

  return (
    <Section>
      <Headline title={s.title} subtitle={s.subtitle} />
      <CardsList type="services" data={s.list} />
    </Section>
  );
};

Services.propTypes = {
  data: propTypes.object.isRequired,
};

export default Services;
