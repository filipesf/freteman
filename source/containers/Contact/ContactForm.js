import React from 'react';
import InputText from "../../components/Form/InputText";
import Textarea from "../../components/Form/Textarea";
import "../../components/Button";

const ContactForm = () => {
  return (
    <form class="l-contact__form">
      <InputText id="nome" label="Nome" />
      <InputText id="email" label="Email" />
      <Textarea id="mensagem" label="Mensagem" />
      <button className="c-btn --accent --large --block">Enviar Mensagem</button>
    </form>
  );
};

export default ContactForm;
