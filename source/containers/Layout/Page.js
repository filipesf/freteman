import React from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const Page = props => {
  return (
    <section className="l-page">
      <Navigation />
      { props.children }
      <Footer />
    </section>
  );
};

export default Page;
