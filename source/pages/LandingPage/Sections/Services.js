import React from 'react';
import SVG from 'react-svg-inline';

import Section from '../../../containers/Section';
import Headline from '../../../components/Headline';

import '../../../assets/styles/_services.scss';

import distrib  from '../../../assets/images/distribution.svg';
import house    from '../../../assets/images/house.svg';
import pieces   from '../../../assets/images/pieces.svg';
import products from '../../../assets/images/products.svg';
import trash    from '../../../assets/images/trash.svg';

const Services = () =>
  <Section>
    <Headline
      title="Tipos de serviços"
      subtitle="Atuamos em diversas áreas para oferecer a você serviços para qualquer necessidade."
    />

    <section className="l-box-container">
      <div className="c-box _shadow-large">
        <SVG svg={products} />
      </div>

      <div className="c-box _shadow-large">
        <SVG svg={distrib} />
      </div>

      <div className="c-box _shadow-large">
        <SVG svg={house} />
      </div>

      <div className="c-box _shadow-large">
        <SVG svg={pieces} />
      </div>

      <div className="c-box _shadow-large">
        <SVG svg={trash} />
      </div>
    </section>
  </Section>

export default Services;
