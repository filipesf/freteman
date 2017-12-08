import React from 'react';

/* CONTAINERS
   ========================================================================== */
import Section   from '../../../containers/Section';
import CardsList from '../../../containers/CardsList';



/* COMPONENTS
   ========================================================================== */
import Headline from '../../../components/Headline';



/* ASSETS
   ========================================================================== */
import distrib  from '../../../assets/images/distribution.svg';
import house    from '../../../assets/images/house.svg';
import pieces   from '../../../assets/images/pieces.svg';
import products from '../../../assets/images/products.svg';
import trash    from '../../../assets/images/trash.svg';



/* DATA
   ========================================================================== */
const serviceCards = [{
  "image": distrib,
  "title": "Entrega de produtos",
  "subtitle": "Entrega de produtos."
},{
  "image": house,
  "title": "Entrega de produtos",
  "subtitle": "Entrega de produtos."
},{
  "image": pieces,
  "title": "Entrega de produtos",
  "subtitle": "Entrega de produtos."
},{
  "image": products,
  "title": "Entrega de produtos",
  "subtitle": "Entrega de produtos."
},{
  "image": trash,
  "title": "Entrega de produtos",
  "subtitle": "Entrega de produtos."
}];





/* ==========================================================================
   SERVICES
   ========================================================================== */
const Services = props =>
  <Section>
    <Headline
      title="Tipos de serviços"
      subtitle="Atuamos em diversas áreas para oferecer a você serviços para qualquer necessidade."
    />

    <CardsList data={serviceCards}/>
  </Section>

export default Services;
