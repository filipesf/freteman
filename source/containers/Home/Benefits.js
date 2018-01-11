import React from 'react';
import propTypes from 'prop-types';
import Section from '../../components/Section';
import Headline from '../../components/Headline';
import CardsList from '../../components/Card/List';

const Benefits = props => {
  const b = props.data;

  return (
    <Section>
      <Headline title={b.title} subtitle={b.subtitle} />
      <CardsList type="benefits" data={b.content} />
    </Section>
  );
};

Benefits.propTypes = {
  data: propTypes.object.isRequired,
};

export default Benefits;
