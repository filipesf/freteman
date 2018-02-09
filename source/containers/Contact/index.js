import React from 'react';
import Page from '../Layout/Page';
import ContactForm from './ContactForm';
import './assets/contact.scss';

const Contact = () => {
  return (
    <Page id="Contact" title="Contato" subtitle="Nós estamos aqui para ajudar. Fale conosco.">
      <section className="l-contact">
        <ContactForm />
      </section>
    </Page>
  );
};

export default Contact;
