import React from 'react';
import PropTypes from 'prop-types';

import SiteNav from '../Nav/SiteNav';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Headline from '../Headline/Headline';
import SectionContainer from '../Containers/SectionContainer';

const LandingPage = () =>
  <section className="landing-page">
    <SiteNav />
    <Header />

    <SectionContainer>
      <Headline
        title="Tipos de serviços"
        subtitle="Atuamos em diversas áreas para oferecer a você serviços para qualquer necessidade."
      />
    </SectionContainer>

    <SectionContainer>
      <Headline
        title="Como Funciona"
        subtitle="Chame um mensageiro em três passos simples"
      />
    </SectionContainer>

    <SectionContainer>
      <Headline
        title="Benefícios"
        subtitle="Atuamos em diversas áreas para oferecer a você serviços para qualquer necessidade."
      />
    </SectionContainer>

    <SectionContainer theme="red">
      <Headline
        title="Clientes Satisfeitos"
      />
    </SectionContainer>

    <SectionContainer theme="tint">
      <Headline
        title="Marcas"
        subtitle="Atuamos em diversas áreas para oferecer a você serviços para qualquer necessidade."
      />
    </SectionContainer>

    <Footer />
  </section>

LandingPage.PropTypes = {}

export default LandingPage;
