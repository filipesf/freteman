import React from 'react';

import Section from '../../../containers/Section';
import CardsList from '../../../containers/CardsList';

import Headline from '../../../components/Headline';

import benefitPrice from '../../../assets/images/benefit-price.svg';
import benefitProduct from '../../../assets/images/benefit-product.svg';
import benefitTime from '../../../assets/images/benefit-time.svg';

const benefitCards = [{
  image: benefitTime,
  title: "Sua entrega feita em até 120 minutos",
}, {
  image: benefitPrice,
  title: "Cotação instantânea e transparente, reserva imediata",
}, {
  image: benefitProduct,
  title: "Suas coisas protegidas com seguro",
}];

const Benefits = () => (
  <Section>
    <Headline
      title="Benefícios"
      subtitle="Atuamos em diversas áreas para oferecer a você serviços para qualquer necessidade."
    />

    <CardsList hasBenefits data={benefitCards} />
  </Section>
);

export default Benefits;
