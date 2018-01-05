import React from 'react';
import propTypes from 'prop-types';
import Headline from '../../components/Headline';
import SocialLinks from '../../components/SocialLinks';
import './assets/contact-info.scss';

const ContactInfo = props => {
  return (
    <div className="c-contact-info">
      <div className="c-contact-info__group">
        <span className="c-contact-info__text">Ligue pra gente</span>
        <Headline title={props.data.phone} />
      </div>
      <div className="c-contact-info__group">
        <span className="c-contact-info__text">Acompanhe nas redes</span>
        <SocialLinks data={props.data.socialLinks} />
      </div>
    </div>
  );
};

ContactInfo.propTypes = {
  data: propTypes.object.isRequired
};

export default ContactInfo;
