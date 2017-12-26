import React from 'react';

import Section from '../../../containers/Section';
import CardsList from '../../../containers/CardsList';

import Headline from '../../../components/Headline';

import brandLatam from '../../../assets/images/brands/latam.png';
import brandPetrobras from '../../../assets/images/brands/petrobras.png';
import brandVivo from '../../../assets/images/brands/vivo.png';
import brandReclameAqui from '../../../assets/images/brands/reclameaqui.png';
import brandConsul from '../../../assets/images/brands/consul.png';

const brandCards = [
  { image: brandLatam },
  { image: brandPetrobras },
  { image: brandVivo },
  { image: brandReclameAqui },
  { image: brandConsul }
];

const Brands = () => (
  <Section theme="tint">
    <Headline
      title="Marcas"
      subtitle="Atuamos em diversas áreas para oferecer a você serviços para qualquer necessidade."
    />

    <CardsList hasBrands data={brandCards} />
  </Section>
);

export default Brands;
