import React from 'react';
import propTypes from 'prop-types';
import Headline from '../../components/Headline';
import SocialLinks from '../../components/SocialLinks';
import './assets/styles/contact.scss';

const Contact = props => {
  const c = props.data;

  return (
    <div className="c-contact">
      <div className="c-contact__group">
        <span className="c-contact__text">Ligue pra gente</span>
        <Headline title={c.phone} />
      </div>
      <div className="c-contact__group">
        <span className="c-contact__text">Acompanhe nas redes</span>
        <SocialLinks data={c.socialLinks} />
      </div>
    </div>
  );
};

Contact.propTypes = {
  data: propTypes.object.isRequired
};

export default Contact;
