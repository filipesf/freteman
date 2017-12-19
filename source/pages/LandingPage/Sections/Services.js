import React from 'react';
import propTypes from 'prop-types';

import Section from '../../../containers/Section';
import CardsList from '../../../containers/CardsList';

import Headline from '../../../components/Headline';

import imageDistribution from '../../../assets/images/distribution.svg';
import imageHouse from '../../../assets/images/house.svg';
import imageGenerator from '../../../assets/images/pieces.svg';
import imageProduct from '../../../assets/images/products.svg';
import imageBrokenComputer from '../../../assets/images/trash.svg';

const serviceCards = [{
  image: imageDistribution,
  title: "Entrega de produtos",
  subtitle: "Entrega de produtos.",
}, {
  image: imageHouse,
  title: "Entrega de produtos",
  subtitle: "Entrega de produtos.",
}, {
  image: imageGenerator,
  title: "Entrega de produtos",
  subtitle: "Entrega de produtos.",
}, {
  image: imageProduct,
  title: "Entrega de produtos",
  subtitle: "Entrega de produtos.",
}, {
  image: imageBrokenComputer,
  title: "Entrega de produtos",
  subtitle: "Entrega de produtos.",
}];

const Services = () => (
  <Section>
    <Headline
      title="Tipos de serviços"
      subtitle="Atuamos em diversas áreas para oferecer a você serviços para qualquer necessidade."
    />

    <CardsList data={serviceCards} />
  </Section>
);

Services.propTypes = {
  data: propTypes.array,
};

export default Services;
