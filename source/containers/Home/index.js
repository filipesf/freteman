import React from 'react';
import data from '../../constants/dataHome';
import Layout from '../Layout';
import Header from './Header';
import Services from './Services';
import HowItWorks from './HowItWorks';
import Benefits from './Benefits';
import Customers from './Customers';
import Clients from './Clients';
import './assets/styles/home.scss';

const Home = () => (
  <Layout id="Home" className="l-home">
    <Header data={data.header} />

    <section id="site-content">
      <Services data={data.services} />
      <HowItWorks data={data.howItWorks} />
      <Benefits data={data.benefits} />
      <Customers data={data.customers} />
      <Clients data={data.clients} />
    </section>
  </Layout>
);

export default Home;
