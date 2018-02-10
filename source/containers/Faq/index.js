import React from 'react';
import data from '../../constants/dataFaq';
import Page from '../Layout/Page';
import FaqList from './FaqList';
import './assets/faq.scss';

const Faq = () => {
  return (
    <Page id="Faq" className="l-faq" title="Perguntas Frequentes">
      <FaqList data={data} />
    </Page>
  );
};

export default Faq;
