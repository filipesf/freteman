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
        <figure className="image">
          <SVG svg={products} />
        </figure>
        <Headline
          modifier="small"
          title="Entrega de produtos"
          subtitle="Entrega de produtos."
        />
      </div>

      <div className="c-box _shadow-large">
        <figure className="image">
          <SVG svg={distrib} />
        </figure>
        <Headline
          modifier="small"
          title="Transporte e distribuição"
          subtitle="Transporte e distribuição."
        />
      </div>

      <div className="c-box _shadow-large">
        <figure className="image">
          <SVG svg={house} />
        </figure>
        <Headline
          modifier="small"
          title="Pequena mudança"
          subtitle="Pequena mudança."
        />
      </div>

      <div className="c-box _shadow-large">
        <figure className="image">
          <SVG svg={pieces} />
        </figure>
        <Headline
          modifier="small"
          title="Transporte de peças"
          subtitle="Transporte de peças."
        />
      </div>

      <div className="c-box _shadow-large">
        <figure className="image">
          <SVG svg={trash} />
        </figure>
        <Headline
          modifier="small"
          title="Remoção de lixo"
          subtitle="Remoção de lixo."
        />
      </div>
    </section>
  </Section>

export default Services;
