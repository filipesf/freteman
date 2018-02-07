import React from 'react';
import propTypes from 'prop-types';
import Headline from '../Headline';
import SocialLinks from '../SocialLinks';
import './assets/contact.scss';

const Contact = props => {
  const data = props.data;

  return (
    <div className="c-contact">
      <div className="c-contact__group">
        <span className="c-contact__text">Ligue pra gente</span>
        <Headline title={data.phone} />
      </div>
      <div className="c-contact__group">
        <span className="c-contact__text">Acompanhe nas redes</span>
        <SocialLinks data={data.socialLinks} />
      </div>
    </div>
  );
};

Contact.propTypes = {
  data: propTypes.object.isRequired
};

export default Contact;
