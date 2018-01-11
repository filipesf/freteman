import React from 'react';
import SiteNav from '../../containers/SiteNav';
import Header from '../../containers/Header';
import Footer from '../../containers/Footer';
import Services from './HomeServices';
import HowItWorks from './HomeHowItWorks';
import Benefits from './HomeBenefits';
import Customers from './HomeCustomers';
import Clients from './HomeClients';

const Home = () => (
  <section id="Home">
    <SiteNav />
    <Header />

    <main id="site-content" role="main">
      <Services />
      <HowItWorks />
      <Benefits />
      <Customers />
      <Clients />
    </main>

    <Footer />
  </section>
);

export default Home;
