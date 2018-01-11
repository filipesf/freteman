import React from 'react';
import propTypes from 'prop-types';
import Contact from './Contact';
import Subnav from '../../components/Subnav';
import Thumbnail from '../../components/Thumbnail';
import Headline from '../../components/Headline';
import './assets/styles/footer.scss';
import '../../assets/styles/helpers.scss';

const Footer = props => {
  const f = props.data;

  const subnavs = f.navs.map((s, index) =>
    <Subnav key={index} data={s} />);

  return (
    <footer className="site-footer">
      <section className="site-footer__band">
        <Thumbnail src={f.customerService.image} />
        <Headline title={f.customerService.title} small />
      </section>

      <section className="site-footer__container">
        <nav className="site-footer__navs">{subnavs}</nav>
        <Contact data={f.contact} />
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
