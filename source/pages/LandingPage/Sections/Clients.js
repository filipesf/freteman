import React from 'react';
import data from '../../../constants/data';
import Section from '../../../containers/Section';
import Block from '../../../containers/Block';
import Headline from '../../../components/Headline';
import Author from '../../../components/Author';

const testimonialItem = data.clients.content.map((t, index) => (
  <Block shadow key={index}>
    <blockquote>{t.quote}</blockquote>
    <Author avatar={t.avatar} name={t.name} location={t.location} />
  </Block>
));

const Clients = () => (
  <Section theme="red">
    <Headline title={data.clients.title} />
    <section className="l-testimonials">{testimonialItem}</section>
  </Section>
);

export default Clients;
