import React from 'react';
import data from '../../constants/data';
import Section from '../../containers/Section';
import Headline from '../../components/Headline';
import Showcase from '../../components/Showcase';

const HowItWorks = () => (
  <Section>
    <Headline title={data.howItWorks.title} subtitle={data.howItWorks.subtitle} />
    <Showcase data={data.howItWorks.content} />
  </Section>
);

export default HowItWorks;
