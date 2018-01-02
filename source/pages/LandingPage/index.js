import React from 'react';
import SiteNav from '../../containers/SiteNav';
import Header from '../../containers/Header';
import Footer from '../../containers/Footer';
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
