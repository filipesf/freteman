import React from 'react';

import Section from '../Section/Section';

import SiteNav  from '../../components/Nav/SiteNav';
import Header   from '../../components/Header/Header';
import Footer   from '../../components/Footer/Footer';
import Headline from '../../components/Headline/Headline';

const LandingPage = () =>
  <section className="landing-page">
    <SiteNav />
    <Header />

    <Section>
      <Headline
        title="Tipos de serviços"
        subtitle="Atuamos em diversas áreas para oferecer a você serviços para qualquer necessidade."
      />
    </Section>

    <Section>
      <Headline
        title="Como Funciona"
        subtitle="Chame um mensageiro em três passos simples"
      />
    </Section>

    <Section>
      <Headline
        title="Benefícios"
        subtitle="Atuamos em diversas áreas para oferecer a você serviços para qualquer necessidade."
      />
    </Section>

    <Section theme="red">
      <Headline
        title="Clientes Satisfeitos"
      />
    </Section>

    <Section theme="tint">
      <Headline
        title="Marcas"
        subtitle="Atuamos em diversas áreas para oferecer a você serviços para qualquer necessidade."
      />
    </Section>

    <Footer />
  </section>

export default LandingPage;
