import React from 'react';
import data from '../../constants/homeData';
import Navigation from './Navigation';
import Header from './Header';
import Services from './Services';
import HowItWorks from './HowItWorks';
import Benefits from './Benefits';
import Customers from './Customers';
import Clients from './Clients';
import Footer from './Footer';

const Home = () => (
  <section id="Home">
    <Navigation />
    <Header data={data.header} />

    <main id="site-content" role="main">
      <Services data={data.services} />
      <HowItWorks data={data.howItWorks} />
      <Benefits data={data.benefits} />
      <Customers data={data.customers} />
      <Clients data={data.clients} />
    </main>

    <Footer data={data.footer} />
  </section>
);

export default Home;
