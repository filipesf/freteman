import React from 'react';

/* CONTAINERS
   ========================================================================== */
import Section   from '../../../containers/Section';



/* COMPONENTS
   ========================================================================== */
import Headline from '../../../components/Headline';
import Showcase from '../../../components/Showcase';





/* ASSETS
   ========================================================================== */
import iconOrder         from '../../../assets/images/icons/box.svg';
import iconMeet          from '../../../assets/images/icons/brand.svg';
import iconDestination   from '../../../assets/images/icons/pin.svg';
import thumbOrder        from '../../../assets/images/howitworks-1.png';
import thumbMeet         from '../../../assets/images/howitworks-2.png';
import thumbDestination  from '../../../assets/images/howitworks-3.png';



/* DATA
   ========================================================================== */
const showcaseItems = {
  order: {
    active: true,
    icon: iconOrder,
    thumb: thumbOrder,
    title: "Faça um pedido pelo sistema da Freteman",
    description: "Escolha o local de coleta e de entrega e forneça detalhes do serviço."
  },
  meet: {
    active: false,
    icon: iconMeet,
    thumb: thumbMeet,
    title: "Encontre-se com o funcionário da Freteman",
    description: "A encomenda é coletada por nosso funcionário e encaminhada até seu destino."
  },
  destination: {
    active: false,
    icon: iconDestination,
    thumb: thumbDestination,
    title: "Seu material é entregue ao destino escolhido",
    description: "Sua encomenda chega nas mãos do destinário e você pode acompanhar tudo pelo sistema."
  }
};





/* ==========================================================================
   HOW IT WORKS
   ========================================================================== */
const HowItWorks = () =>
  <Section>
    <Headline
      title="Como Funciona"
      subtitle="Chame um mensageiro em três passos simples"
    />

    <Showcase data={showcaseItems} />
  </Section>

export default HowItWorks;
