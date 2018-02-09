import React from 'react';
import Page from '../Layout/Page';
import ContactForm from './ContactForm';
import ContactMap from './ContactMap';
import './assets/contact.scss';

const Contact = () => {
  return (
    <Page id="Contact" title="Contato">
      <section className="l-contact">
        <ContactForm />
        <ContactMap />
      </section>
    </Page>
  );
};

export default Contact;
