import React from 'react';
import propTypes from 'prop-types';
import Layout from './index';
import Headline from '../../components/Headline';
import './assets/page.scss';

const Page = props => {
  return (
    <Layout id={props.id}>
      <section className="l-page">
        {props.title && <div className="l-page__title">
          <Headline title={props.title} subtitle={props.subtitle} left />
        </div>}

        <div className="l-page__container">
          <div className={props.className}>
            {props.children}
          </div>
        </div>
      </section>
    </Layout>
  );
};

Page.propTypes = {
  id: propTypes.string,
  className: propTypes.string,
  title: propTypes.string,
  subtitle: propTypes.string,
  children: propTypes.node.isRequired
};

export default Page;
