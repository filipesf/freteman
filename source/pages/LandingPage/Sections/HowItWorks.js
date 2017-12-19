import React from 'react';

import Section   from '../../../containers/Section';

import Headline from '../../../components/Headline';
import Showcase from '../../../components/Showcase';

import iconOrder         from '../../../assets/images/icons/box.svg';
import thumbOrder        from '../../../assets/images/howitworks-1.png';
import iconMeet          from '../../../assets/images/icons/brand.svg';
import thumbMeet         from '../../../assets/images/howitworks-2.png';
import iconDestination   from '../../../assets/images/icons/pin.svg';
import thumbDestination  from '../../../assets/images/howitworks-3.png';

const showcaseItems = {
  1: {
    icon: iconOrder,
    thumb: thumbOrder,
    title: "Faça um pedido pelo sistema da Freteman",
    description: "Escolha o local de coleta e de entrega e forneça detalhes do serviço."
  },
  2: {
    icon: iconMeet,
    thumb: thumbMeet,
    title: "Encontre-se com o funcionário da Freteman",
    description: "A encomenda é coletada por nosso funcionário e encaminhada até seu destino."
  },
  3: {
    icon: iconDestination,
    thumb: thumbDestination,
    title: "Seu material é entregue ao destino escolhido",
    description: "Sua encomenda chega nas mãos do destinário e você pode acompanhar tudo pelo sistema."
  }
};

const HowItWorks = () => (
  <Section>
    <Headline
      title="Como Funciona"
      subtitle="Chame um mensageiro em três passos simples"
    />

    <Showcase data={showcaseItems} />
  </Section>
);

export default HowItWorks;
