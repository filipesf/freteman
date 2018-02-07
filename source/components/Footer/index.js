import React from 'react';
import propTypes from 'prop-types';
import data from '../../constants/dataFooter';
import Contact from './Contact';
import Subnav from '../Subnav';
import Thumbnail from '../Thumbnail';
import Headline from '../Headline';
import './assets/footer.scss';
import '../../assets/styles/helpers.scss';

const Footer = () => {
  const subnavs = data.navs.map((s, index) =>
    <Subnav key={index} data={s} />);

  return (
    <footer className="site-footer">
      <section className="site-footer__band">
        <Thumbnail src={data.customerService.image} />
        <Headline title={data.customerService.title} small />
      </section>

      <section className="site-footer__container">
        <nav className="site-footer__navs">{subnavs}</nav>
        <Contact data={data.contact} />
      </section>

      <section className="site-footer__micro">
        <p>© Freteman 2017</p>
      </section>
    </footer>
  );
};

Footer.propTypes = {
  data: propTypes.object.isRequired,
};

export default Footer;
