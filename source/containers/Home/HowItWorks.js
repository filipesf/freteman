import React from 'react';
import propTypes from 'prop-types';
import Section from '../../components/Section';
import Headline from '../../components/Headline';
import Showcase from '../../components/Showcase';

const HowItWorks = props => {
  const hiw = props.data;

  return (
    <Section>
      <Headline title={hiw.title} subtitle={hiw.subtitle} />
      <Showcase data={hiw.content} />
    </Section>
  );
};

HowItWorks.propTypes = {
  data: propTypes.object.isRequired,
};

export default HowItWorks;
