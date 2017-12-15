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
import iconBox       from '../../../assets/images/icons/box.svg';
import iconBrand     from '../../../assets/images/icons/brand.svg';
import iconPin       from '../../../assets/images/icons/pin.svg';
import thumbOrder    from '../../../assets/images/howitworks-1.png';
import thumbEmployee from '../../../assets/images/howitworks-2.png';
import thumbDestiny  from '../../../assets/images/howitworks-3.png';



/* DATA
   ========================================================================== */
const showcaseItems = [{
  "active": true,
  "icon": iconBox,
  "thumb": thumbOrder,
  "title": "Faça um pedido pelo sistema da Freteman",
  "description": "Escolha o local de coleta e de entrega e forneça detalhes do serviço."
},{
  "active": false,
  "icon": iconBrand,
  "thumb": thumbEmployee,
  "title": "Encontre-se com o funcionário da Freteman",
  "description": "A encomenda é coletada por nosso funcionário e encaminhada até seu destino."
},{
  "active": false,
  "icon": iconPin,
  "thumb": thumbDestiny,
  "title": "Seu material é entregue ao destino escolhido",
  "description": "Sua encomenda chega nas mãos do destinário e você pode acompanhar tudo pelo sistema."
}];





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
