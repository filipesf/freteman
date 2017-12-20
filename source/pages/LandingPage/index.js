import React from 'react';

import SiteNav from '../../components/SiteNav';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import Services from './Sections/Services';
import HowItWorks from './Sections/HowItWorks';
import Benefits from './Sections/Benefits';
import Clients from './Sections/Clients';
import Brands from './Sections/Brands';

const LandingPage = () => (
  <section id="landing-page">
    <SiteNav />
    <Header />

    <main id="site-content" role="main">
      <Services />
      <HowItWorks />
      <Benefits />
      <Clients />
      <Brands />
    </main>

    <Footer />
  </section>
);

export default LandingPage;
