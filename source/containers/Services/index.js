import React from 'react';
import data from '../../constants/dataServices';
import Page from '../Layout/Page';
import CardsList from '../../components/Card/List';

const Services = () => {
  return (
    <Page id="Services" title={data.title} subtitle={data.subtitle}>
      <CardsList type="services" data={data.list} />
    </Page>
  );
};

export default Services;
