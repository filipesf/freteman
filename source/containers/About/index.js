import React from 'react';
import assets from '../../constants/assets';
import Page from '../Layout/Page';
import Thumbnail from '../../components/Thumbnail';
import './assets/about.scss';

const About = () => {
  return (
    <Page id="About" className="l-about" title="Sobre" subtitle="Conheça um pouco mais sobre a nossa história.">
      <Thumbnail src={assets.img.about} />
      <article className="l-about__content">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </article>
    </Page>
  );
};

export default About;
