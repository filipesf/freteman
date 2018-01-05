import React from 'react';
import data from '../../constants/data';
import SubNav from '../../components/SubNav';
import Thumbnail from '../../components/Thumbnail';
import Headline from '../../components/Headline';
import ContactInfo from './ContactInfo.js';
import './assets/footer.scss';
import '../../assets/styles/_helpers.scss';

const Footer = () => {
  const subNavs = data.footer.subNavs.map((s, index) =>
    <SubNav key={index} data={s} />);

  return (
    <footer className="l-footer">
      <section className="l-footer__band">
        <Thumbnail src={data.footer.customerService.image} />
        <Headline title={data.footer.customerService.title} small />
      </section>

      <section className="l-footer__container">
        <nav className="l-footer__navs">{subNavs}</nav>
        <ContactInfo data={data.footer.contact} />
      </section>

      <section className="l-footer__micro">
        <p>© Freteman 2017</p>
      </section>
    </footer>
  );
};

export default Footer;
