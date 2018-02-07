import React from 'react';
import data from '../../constants/dataHome';
import Page from '../Layout/Page';
import Header from './Header';
import Services from './Services';
import HowItWorks from './HowItWorks';
import Benefits from './Benefits';
import Customers from './Customers';
import Clients from './Clients';

const Home = () => (
  <Page id="Home">
    <Header data={data.header} />

    <main id="site-content" role="main">
      <Services data={data.services} />
      <HowItWorks data={data.howItWorks} />
      <Benefits data={data.benefits} />
      <Customers data={data.customers} />
      <Clients data={data.clients} />
    </main>
  </Page>
);

export default Home;
