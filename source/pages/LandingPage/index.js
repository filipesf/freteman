import React from 'react';

/* LANDING PAGE LAYOUT
   ========================================================================== */
import SiteNav  from '../../components/SiteNav';
import Header   from '../../components/Header';
import Footer   from '../../components/Footer';

/* LANDING PAGE SECTIONS
   ========================================================================== */
import Services   from './Sections/Services';
import HowItWorks from './Sections/HowItWorks';
import Benefits   from './Sections/Benefits';
import Clients    from './Sections/Clients';
import Brands     from './Sections/Brands';

const LandingPage = () =>
  <section id="landing-page">
    <SiteNav />
    <Header />

    <main id="main-content" role="main">
      <Services />
      <HowItWorks />
      <Benefits />
      <Clients />
      <Brands />
    </main>

    <Footer />
  </section>

export default LandingPage;
